// pages/index.tsx
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Header from '../components/Header';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import SortDropdown from '../components/SortDropdown';
import PriceFilter from '../components/PriceFilter';
import { useState } from 'react';

type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  items: Item[];
};

const Home = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortCriterion, setSortCriterion] = useState('price-asc');

  // Filtering and sorting logic here can be refined or moved to utility functions for better separation of concerns
  const filteredAndSortedItems = items
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => item.price >= minPrice && item.price <= maxPrice)
    .sort((a, b) => {
      if (sortCriterion === 'price-asc') return a.price - b.price;
      if (sortCriterion === 'price-desc') return b.price - a.price;
      if (sortCriterion === 'name-asc') return a.name.localeCompare(b.name);
      return a.name.localeCompare(b.name); // Default to name ascending if criteria unclear
    });

  return (
    <div>
      <Header title="Our Online Store" />
      <h1 className="text-2xl font-bold text-center mt-6 mb-4">Welcome to Our Online Store</h1>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SortDropdown sortCriterion={sortCriterion} setSortCriterion={setSortCriterion} />
        <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <ItemList items={filteredAndSortedItems} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Fetching data from a local file, adjust the path as necessary
  const data = await import('../public/data/items.json');
  const items: Item[] = data.default;

  return {
    props: {
      items,
    },
  };
};

export default Home;
