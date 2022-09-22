import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import _ from 'lodash';
import {Zone} from '../types/models';

export interface ZoneState {
  data: Zone[];
  loading: boolean;
  isError: boolean;
}

const initialState = {data: [], loading: false, isError: false} as ZoneState;

const delay = (sec: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, sec);
  });
};

export const getAllZones = createAsyncThunk(
  'zones/getAllZones',
  async (id, thunkAPI) => {
    try {
      await delay(1000);
      const res = await require('../../__data__/data.json');
      //console.log('Zones: ', res.data?.controller?.zones);
      return res.data?.controller?.zones;
    } catch (error) {
      if (error instanceof Error) console.log(error);
      return thunkAPI.rejectWithValue('Error loading zones data');
    }
  },
);

const ZonesSlice = createSlice({
  name: 'Zones',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllZones.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllZones.fulfilled, (state, action) => {
      state.loading = false;
      state.data = _.uniqBy([...state.data, ...action.payload], 'id');
    });
    builder.addCase(getAllZones.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
      console.log('Error Loading zones data');
    });
  },
});

// export const {} = TripsSlice.actions;
export default ZonesSlice.reducer;
