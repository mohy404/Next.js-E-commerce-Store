'use client'

import React from 'react';
import { useShoppingCart, useShoppingCartDispatch } from '../state/useShoppingCart';

const ShoppingCart: React.FC = () => {
  const { items } = useShoppingCart();
  const dispatch = useShoppingCartDispatch();

  const increaseQuantity = (id: number) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
  };

  const decreaseQuantity = (id: number) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  if (items.length === 0) {
    return <div className="text-center p-5">Your cart is empty.</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold mb-4">Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="mb-4 p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="text-md font-semibold">{item.name}</h3>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div className="flex items-center">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 py-1 border rounded text-gray-600 bg-gray-200 hover:bg-gray-300">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 border rounded text-gray-600 bg-gray-200 hover:bg-gray-300">+</button>
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-700">Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
