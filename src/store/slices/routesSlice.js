import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
  name: 'route',
  initialState: {
    currentRoute: '/',
  },
  reducers: {
    setRoute(state, action) {
      state.currentRoute = action.payload;
    },
  },
});

export const { setRoute } = routesSlice.actions;
export default routesSlice;
