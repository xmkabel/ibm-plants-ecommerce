
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/placeholder.svg')" }}>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-lg bg-black/30 text-white p-8 backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-4">Welcome To<br />Paradise Nursery</h1>
            <p className="mb-6">
              At Paradise Nursery, we sell premium quality plants for your home, garden or office.
              Each plant is grown with care and delivered in perfect condition to your doorstep.
            </p>
            <p className="mb-6">
              The heart of Paradise Nursery is its passion for plants. We carefully source the healthiest plants
              from sustainable growers and deliver them to plant lovers nationwide.
            </p>
            <Link 
              to="/products" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors"
            >
              Shop Plants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
