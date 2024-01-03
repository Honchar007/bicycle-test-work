import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// apis
import BikeApi from '../api/Bike.api';

const initialState = {
  total: 0,
  available: 0,
  busy: 0,
  averagePrice: 0,
  bikes: [],
};


export const addBike = createAsyncThunk('bikes/addBike', async (bikeData) => {
  try {
    const bike = await BikeApi.addBike({...bikeData});
    return bike;
  } catch (error) {
    throw new Error('Failed to add bike');
  }
});

export const removeBike = createAsyncThunk('bikes/removeBike', async (bikeId) => {
  try {
    const id = await BikeApi.removeBike(bikeId);
    return id;
  } catch (error) {
    throw new Error('Failed to remove bike');
  }
});

export const updateBikeStatus = createAsyncThunk('bikes/updateBikeStatus', async ({ id, status }) => {
  try {
    const bike = await BikeApi.updateBike(id, status);
    return bike;
  } catch (error) {
    throw new Error('Failed to update bike status');
  }
});

export const getBicycles = createAsyncThunk('bikes/getBicycles', async () => {
  try {
    const bikes = await BikeApi.getBikes();
    return bikes;
  } catch (error) {
    throw new Error('Failed to fetch bikes');
  }
});
// builder => {

const bikeSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addBike.fulfilled, (state, action) => {
      state.available = action.payload.available;
      state.busy = action.payload.booked;
      state.averagePrice = action.payload.averagePrice[0].avgPrice.toFixed(2);
      console.log(action.payload);
      state.total += 1;

      state.bikes.push(action.payload.bike);
    });
    builder.addCase(removeBike.fulfilled, (state, action) => {
      state.available = action.payload.available;
      state.busy = action.payload.booked;
      state.averagePrice = action.payload.averagePrice[0].avgPrice.toFixed(2);
      state.total -= 1;

      state.bikes = state.bikes.filter(bike => bike.id !== action.payload.bike.id);
    });
    builder.addCase(updateBikeStatus.fulfilled, (state, action) => {
      const updatedBike = state.bikes.find(bike => bike.id === action.payload.bike.id);

      state.available = action.payload.available;
      state.busy = action.payload.booked;

      if (updatedBike) {
        updatedBike.status = action.payload.status;
      }
    });
    builder.addCase(getBicycles.fulfilled, (state, action) => {
      state.total = action.payload.total;
      state.available = action.payload.available;
      state.busy = action.payload.booked;
      state.averagePrice = action.payload.averagePrice[0].avgPrice.toFixed(2);
      state.bikes = action.payload.bicycles;
    });
  },
});

export const selectBikes = state => state.bikes;
export const selectTotal = state => state.total;
export const selectAvg = state => state.averagePrice;
export const selectAvailable = state => state.available;
export const selectBooked = state => state.busy;


export default bikeSlice.reducer;