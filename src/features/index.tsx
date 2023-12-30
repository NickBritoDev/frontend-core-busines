import { configureStore } from '@reduxjs/toolkit'
import configAppReducer from './config/index'
import navigateSlice from './navigate/navigateSlice'
import toasterReducer from './toast/toastSlice'

const store = configureStore({
  reducer: {
    configApp: configAppReducer,
    toast: toasterReducer,
    navigate: navigateSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
