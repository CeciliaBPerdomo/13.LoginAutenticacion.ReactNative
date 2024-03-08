// Redux
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { shopApi } from './services/shop'

import counterReducer from "../features/counter/counterSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,

    // Para trabajar con firebase: 
    [shopApi.reducerPath]: shopApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)