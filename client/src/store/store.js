import { configureStore } from '@reduxjs/toolkit';

// slices
import bikeReducer from './bike';

export const store = configureStore({
  reducer: bikeReducer,
});