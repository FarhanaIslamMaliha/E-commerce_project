import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: null,
  cart:[]
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.product = action.payload;
    },
    FilterReducer: (state, action) => {
      state.product = action.payload;
    },
    AddToCartReducer: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer,FilterReducer, AddToCartReducer } = ProductSlice.actions

export default ProductSlice.reducer