
type Item = {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  
  // Function to filter items by name (case-insensitive)
  const filterItemsByName = (items: Item[], searchTerm: string): Item[] => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Function to filter items by price range
  const filterItemsByPriceRange = (
    items: Item[],
    minPrice: number,
    maxPrice: number
  ): Item[] => {
    return items.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
  };
  
  // Combine both name and price filters (if needed)
  const filterItems = (
    items: Item[],
    searchTerm: string,
    minPrice: number,
    maxPrice: number
  ): Item[] => {
    return filterItemsByName(
      filterItemsByPriceRange(items, minPrice, maxPrice),
      searchTerm
    );
  };
  
  export { filterItemsByName, filterItemsByPriceRange, filterItems };
  