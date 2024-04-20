'use client'

import React from 'react';
import { useShoppingCartDispatch } from '../state/useShoppingCart';

type ItemCardProps = {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useShoppingCartDispatch();

  const handleAddToCart = () => {
    // When dispatching, ensure that all required properties are included.
    // Since 'quantity' is required, you need to provide it.
    // If this is a new item being added to the cart, set quantity to 1.
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...item, // Spreads the existing item properties
        quantity: 1 // Sets the quantity as required by the Item type
      }
    });
  };

  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col">
      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
      <p className="mb-4 text-sm text-gray-600">{item.description}</p>
      <p className="text-lg font-semibold mb-4">${item.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className="mt-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
