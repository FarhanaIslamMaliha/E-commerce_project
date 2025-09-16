import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from "./Slices/ProductSlice"

export const store = configureStore({
  reducer: {ProductSlice},
});

export default store