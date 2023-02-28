import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});
