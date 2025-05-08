
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlantItem } from '../types';
import { addToCart } from '../store/cartSlice';
import { RootState } from '../store';
import { Badge } from "@/components/ui/badge";

interface PlantCardProps {
  plant: PlantItem;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = !!cartItems[plant.id];

  const handleAddToCart = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-red-500">Sale</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{plant.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{plant.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-green-700">${plant.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`px-3 py-1 rounded text-white ${
              isInCart ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
