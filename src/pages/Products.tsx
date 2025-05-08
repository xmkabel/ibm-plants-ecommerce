
import React from 'react';
import { useSelector } from 'react-redux';
import { plantData, categories } from '../data/plants';
import PlantCard from '../components/PlantCard';
import NavBar from '../components/NavBar';
import { RootState } from '../store';

const Products = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">All Purifying Plants</h1>
        <p className="text-gray-600 text-center mb-8">Find the perfect plant for your space</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantData.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
