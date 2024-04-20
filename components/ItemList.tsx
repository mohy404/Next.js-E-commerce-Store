'use client'

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SortDropdown from './SortDropdown';
import ItemCard from './ItemCard';  
import PriceFilter from './PriceFilter';  
import { filterItemsByName, filterItemsByPriceRange } from '../utils/filterUtils';
import { sortItems } from '../utils/sortUtils';

// Assuming you have a type definition for Item
type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  items: Item[]; // This should be passed in as a prop from a parent component, like the page component
};

const ItemList: React.FC<Props> = ({ items }) => {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortCriterion, setSortCriterion] = useState('price-asc');

  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setIsClient(true); // Ensure this code runs only on the client-side
  }, []);

  useEffect(() => {
    if (!isClient) {
      return; // Skip any client-side logic if not on the client
    }
    let result = filterItemsByName(items, searchTerm);
    result = filterItemsByPriceRange(result, minPrice, maxPrice);
    result = sortItems(result, sortCriterion);
    setFilteredItems(result);
  }, [items, searchTerm, minPrice, maxPrice, sortCriterion, isClient]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div>
          <SortDropdown sortCriterion={sortCriterion} setSortCriterion={setSortCriterion} />
          <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
