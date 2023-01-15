import { configureStore } from '@reduxjs/toolkit';
import trackReducer from '../src/features/Track/trackSlice';
import userReducer from '../src/features/user/userSlice';
import searchTrackReducer from '../src/features/searchTrack/searchTrackSlice';
export const store = configureStore({
  reducer: {
    trackSlice: trackReducer,
    userSlice: userReducer,
    searchTrackRSlice: searchTrackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
