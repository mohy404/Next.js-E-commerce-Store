
import React from 'react';
import Checkout from '../components/Checkout'; 

const CheckoutPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-8">Checkout</h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
