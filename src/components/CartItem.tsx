
import React from 'react';
import { useDispatch } from 'react-redux';
import { PlantItem } from '../types';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: PlantItem & { quantity: number };
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();
  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid rounded-start"
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted small">{item.description}</p>
                <p className="card-text">
                  <span className="text-success fw-bold">${item.price.toFixed(2)}</span> per plant
                </p>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <div className="quantity-control">
                  <button
                    className="btn btn-sm btn-outline-secondary quantity-btn me-2"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 fs-5">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary quantity-btn ms-2"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-end">
                <span className="fs-5 fw-bold me-3">${subtotal}</span>
              </div>
              <div className="col-md-1 d-flex align-items-center">
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  aria-label="Remove from cart"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
