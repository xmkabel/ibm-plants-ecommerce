
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlantItem } from '../types';
import { addToCart } from '../store/cartSlice';
import { RootState } from '../store';

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
    <div className="col">
      <div className="card h-100 shadow-sm card-hover">
        <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
          <img
            src={plant.image}
            className="card-img-top"
            alt={plant.name}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title mb-0">{plant.name}</h5>
            <span className="badge bg-success rounded-pill">${plant.price.toFixed(2)}</span>
          </div>
          <p className="card-text text-muted mb-3 small">{plant.description}</p>
          <button
            className="btn btn-plant mt-auto"
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
