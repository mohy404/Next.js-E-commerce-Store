'use client'
import React from 'react';

type PriceFilterProps = {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice
}) => {
  return (
    <div className="flex space-x-4 items-center">
      <div>
        <label htmlFor="minPrice" className="block text-sm font-medium text-gray-700">
          Min Price
        </label>
        <input
          id="minPrice"
          type="number"
          placeholder="0"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700">
          Max Price
        </label>
        <input
          id="maxPrice"
          type="number"
          placeholder="No limit"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          value={maxPrice === Infinity ? '' : maxPrice}
          onChange={(e) => setMaxPrice(e.target.value === '' ? Infinity : Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
