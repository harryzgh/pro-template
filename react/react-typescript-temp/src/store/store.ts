import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import ageReducer from './slices/ageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ager: ageReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch