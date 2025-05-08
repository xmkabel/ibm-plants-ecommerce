
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { plantData, categories } from '../data/plants';
import PlantCard from '../components/PlantCard';
import NavBar from '../components/NavBar';
import { RootState } from '../store';
import { Button } from "@/components/ui/button";

const Products = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPlants = activeCategory 
    ? plantData.filter(plant => plant.category === activeCategory)
    : plantData;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">All Purifying Plants</h1>
        <p className="text-gray-600 text-center mb-6">Find the perfect plant for your space</p>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            className="mb-2"
          >
            All Plants
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Plant grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
