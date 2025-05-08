
import React from 'react';
import { useSelector } from 'react-redux';
import { plantData, categories } from '../data/plants';
import PlantCard from '../components/PlantCard';
import NavBar from '../components/NavBar';
import { RootState } from '../store';

const Products = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col">
            <h1 className="fw-bold text-center mb-1">Our Plant Collection</h1>
            <p className="text-center text-muted mb-4">Find the perfect plant for your space</p>
          </div>
        </div>

        {categories.map((category) => {
          const categoryPlants = plantData.filter((plant) => plant.category === category.id);
          
          return (
            <div key={category.id} className="mb-5">
              <h2 className="h3 mb-4 border-bottom pb-2">{category.name}</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
