import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlices';
import routesSlice from './slices/routesSlice';

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    routes: routesSlice.reducer,
  },
});

export default store;
