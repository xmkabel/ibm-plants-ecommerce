
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlantItem } from '../types';

interface CartState {
  items: {
    [key: string]: PlantItem & { quantity: number };
  };
  totalItems: number;
  totalCost: number;
}

const initialState: CartState = {
  items: {},
  totalItems: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PlantItem>) => {
      const item = action.payload;
      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
      state.totalItems += 1;
      state.totalCost += item.price;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.totalItems -= state.items[id].quantity;
        state.totalCost -= state.items[id].price * state.items[id].quantity;
        delete state.items[id];
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
        state.totalItems += 1;
        state.totalCost += state.items[id].price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
          state.totalItems -= 1;
          state.totalCost -= state.items[id].price;
        } else {
          state.totalItems -= 1;
          state.totalCost -= state.items[id].price;
          delete state.items[id];
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
