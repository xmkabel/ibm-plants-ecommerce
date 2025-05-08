
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
    <div className="flex items-center py-4 border-b border-gray-200 last:border-0">
      <div className="w-20 h-20 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-1">{item.description}</p>
        <p className="text-green-700 font-medium">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => dispatch(decrementQuantity(item.id))}
          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="mx-3 text-center w-6">{item.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(item.id))}
          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="ml-6 text-right">
        <div className="font-bold">${subtotal}</div>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700 mt-1"
          aria-label="Remove from cart"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
