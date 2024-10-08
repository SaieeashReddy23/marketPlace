import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import requestReducer from './features/Request/requestSlice'
import cartReducer from './features/cart/cartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    request: requestReducer,
    cart: cartReducer,
  },
})

export default store
