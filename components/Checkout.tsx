'use client'

import React, { useState } from 'react';
import { useShoppingCart, useShoppingCartDispatch } from '../state/useShoppingCart';

const Checkout: React.FC = () => {
  const { items } = useShoppingCart();
  const dispatch = useShoppingCartDispatch();
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Process the checkout data
    alert(`Thank you, ${customerName}, your order has been submitted!`);
    dispatch({ type: 'CLEAR_CART' }); // Clear the cart after submission
  };

  if (items.length === 0) {
    return <div className="text-center p-5">Your cart is empty.</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="customerName"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h3 className="text-md font-semibold">Order Summary</h3>
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold">
            Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
        </div>
        <button type="submit" className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
