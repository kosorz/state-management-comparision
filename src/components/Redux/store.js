import { configureStore } from '@reduxjs/toolkit';
import pixelsReducer from './pixelsSlice';

export default configureStore({
  reducer: {
    pixels: pixelsReducer,
  },
});
