
type Item = {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  
  // Function to sort items by price in ascending order
  const sortByPriceAscending = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => a.price - b.price);
  };
  
  // Function to sort items by price in descending order
  const sortByPriceDescending = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => b.price - a.price);
  };
  
  // Function to sort items by name in ascending order (A-Z)
  const sortByNameAscending = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  };
  
  // Function to sort items by name in descending order (Z-A)
  const sortByNameDescending = (items: Item[]): Item[] => {
    return [...items].sort((a, b) => b.name.localeCompare(a.name));
  };
  
  // Utility function to sort items based on a provided criterion
  const sortItems = (items: Item[], criterion: string): Item[] => {
    switch (criterion) {
      case 'price-asc':
        return sortByPriceAscending(items);
      case 'price-desc':
        return sortByPriceDescending(items);
      case 'name-asc':
        return sortByNameAscending(items);
      case 'name-desc':
        return sortByNameDescending(items);
      default:
        return items; // return unsorted items if no matching criterion is found
    }
  };
  
  export { sortByPriceAscending, sortByPriceDescending, sortByNameAscending, sortByNameDescending, sortItems };
  