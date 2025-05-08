
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
      <>
        <NavBar />
        <div className="container my-5 text-center">
          <h1 className="mb-4">Your Cart is Empty</h1>
          <p className="mb-4">Looks like you haven't added any plants to your cart yet.</p>
          <Link to="/products" className="btn btn-plant">
            Browse Plants
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h1 className="mb-4">Your Shopping Cart</h1>
        
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Items ({totalItems}):</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>
                
                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping:</span>
                  <span>FREE</span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-3 fw-bold">
                  <span>Total:</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>
                
                <button 
                  className="btn btn-plant w-100 mt-3" 
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
                
                <Link to="/products" className="btn btn-outline-secondary w-100 mt-2">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
