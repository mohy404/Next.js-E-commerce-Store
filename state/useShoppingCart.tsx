
import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// Define the types for the items and the shopping cart context
type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

type ShoppingCartState = {
  items: Item[];
};

type ShoppingCartAction =
  | { type: 'ADD_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'INCREASE_QUANTITY'; payload: { id: number } }
  | { type: 'DECREASE_QUANTITY'; payload: { id: number } }
  | { type: 'CLEAR_CART' };

// Define a context and a dispatch context for the shopping cart
const ShoppingCartContext = createContext<ShoppingCartState | undefined>(undefined);
const ShoppingCartDispatchContext = createContext<Dispatch<ShoppingCartAction> | undefined>(undefined);

type ShoppingCartProviderProps = {
  children: React.ReactNode; // ReactNode corrected to React.ReactNode
};

// ShoppingCart provider with reducer
const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, { items: [] });

  return (
    <ShoppingCartContext.Provider value={state}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
};

// Reducer function for shopping cart actions
function shoppingCartReducer(state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState {
  switch (action.type) {
    case 'ADD_ITEM':
      // Check if the item is already in the cart
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        // Increase the quantity of the existing item
        let updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // Add the new item
        return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

// Hook to use shopping cart state
function useShoppingCart(): ShoppingCartState {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
}

// Hook to use shopping cart dispatch
function useShoppingCartDispatch(): Dispatch<ShoppingCartAction> {
  const context = useContext(ShoppingCartDispatchContext);
  if (context === undefined) {
    throw new Error('useShoppingCartDispatch must be used within a ShoppingCartProvider');
  }
  return context;
}

export { ShoppingCartProvider, useShoppingCart, useShoppingCartDispatch };
