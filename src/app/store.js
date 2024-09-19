import { configureStore } from '@reduxjs/toolkit'
import cartslice from '../features/Card/cartslice'
import whishReducer from '../features/whishlist/whishSlice'
export default configureStore({
  reducer: {
    CartValue:cartslice,
    whistlistdata: whishReducer,  
  }
})