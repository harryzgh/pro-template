import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import ageReducer from './slices/ageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ager: ageReducer
  }
})