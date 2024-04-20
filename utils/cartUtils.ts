type Item = {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
  
  type CartItem = Item;
  
  type CartState = {
    items: CartItem[];
  };
  
  // Adds an item to the cart or increases its quantity if it's already present
  const addItemToCart = (cart: CartState, itemToAdd: Item): CartState => {
    const existingCartItemIndex = cart.items.findIndex(
      (item) => item.id === itemToAdd.id
    );
  
    if (existingCartItemIndex >= 0) {
      const newItems = cart.items.map((cartItem, index) =>
        index === existingCartItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
  
      return { ...cart, items: newItems };
    } else {
      return { ...cart, items: [...cart.items, { ...itemToAdd, quantity: 1 }] };
    }
  };
  
  // Removes an item from the cart
  const removeItemFromCart = (cart: CartState, itemIdToRemove: number): CartState => {
    return {
      ...cart,
      items: cart.items.filter((item) => item.id !== itemIdToRemove),
    };
  };
  
  // Updates the quantity of a given item in the cart
  const updateItemQuantity = (cart: CartState, itemId: number, quantity: number): CartState => {
    const newItems = cart.items.map((item) =>
      item.id === itemId ? { ...item, quantity: quantity } : item
    );
  
    return { ...cart, items: newItems };
  };
  
  // Calculates the total price of the items in the cart
  const calculateCartTotal = (cart: CartState): number => {
    return cart.items.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
  };
  
  export { addItemToCart, removeItemFromCart, updateItemQuantity, calculateCartTotal };
  