import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import requestReducer from './features/Request/requestSlice'
import cartReducer from './features/cart/cartSlice'
import acceptedReducer from './features/orders/accepted/acceptedSlice'
import rejectedReducer from './features/orders/rejected/rejectedSlice'
import requestedReducer from './features/orders/requested/requestedSlice'
import recievedReducer from './features/orders/recieved/recievedSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    request: requestReducer,
    cart: cartReducer,
    accepted: acceptedReducer,
    rejected: rejectedReducer,
    requested: requestedReducer,
    recieved: recievedReducer,
  },
})

export default store
