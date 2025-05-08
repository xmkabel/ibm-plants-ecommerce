
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store';
import CartItem from '../components/CartItem';
import NavBar from '../components/NavBar';
import { toast } from '../components/ui/use-toast';

const Cart = () => {
  const { items, totalItems, totalCost } = useSelector((state: RootState) => state.cart);
  const cartItems = Object.values(items);
  
  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your purchase.",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any plants to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
          >
            Browse Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-md shadow-md p-6 mb-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items ({totalItems}):</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>FREE</span>
          </div>
          <div className="border-t border-gray-200 my-4"></div>
          <div className="flex justify-between font-bold mb-6">
            <span>Total:</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <button 
            className="w-full bg-green-600 text-white py-3 rounded mb-3 hover:bg-green-700 transition-colors"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <Link 
            to="/products" 
            className="block w-full text-center border border-green-600 text-green-600 py-3 rounded hover:bg-green-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
