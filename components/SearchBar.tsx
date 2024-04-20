// src/components/SearchBar.tsx
import React from 'react';

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void; // Function to update the search term in the parent state
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex border-b border-gray-200 py-2">
      <input
        type="text"
        placeholder="Search for items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
      <button
        className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded"
        type="button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
