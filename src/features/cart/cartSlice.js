import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrease: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    remove: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
