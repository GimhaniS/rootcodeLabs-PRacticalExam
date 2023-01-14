import { configureStore } from '@reduxjs/toolkit';
import trackReducer from '../src/features/Track/trackSlice';
import userReducer from '../src/features/user/userSlice';
export const store = configureStore({
  reducer: {
    trackSlice: trackReducer,
    userSlice: userReducer,
  },
});
