
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Paradise Nursery
          </Link>
          <div className="flex space-x-6 items-center">
            <Link to="/" className="hover:text-green-200">
              Home
            </Link>
            <Link to="/products" className="hover:text-green-200">
              Plants
            </Link>
            <Link to="/cart" className="relative hover:text-green-200">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
