
import React from 'react';
import ShoppingCart from '../components/ShoppingCart';

const Cart: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Your Shopping Cart</h1>
      <ShoppingCart />
    </div>
  );
};

export default Cart;
