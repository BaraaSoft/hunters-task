import {configureStore} from '@reduxjs/toolkit';
import zonesSlice from './zonesSlice.slice';
const store = configureStore({
  reducer: {
    zones: zonesSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
