import { createSlice } from '@reduxjs/toolkit';
import { fetchServices, addServiceAsync, updateServiceAsync, deleteServiceAsync } from '../Thunk/serviceThunk.js';

const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Synchronous actions can still be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle addServiceAsync
      .addCase(addServiceAsync.fulfilled, (state, action) => {
        state.services.push(action.payload);
      })
      // Handle updateServiceAsync
      .addCase(updateServiceAsync.fulfilled, (state, action) => {
        const { _id } = action.payload;
        const existingService = state.services.find((service) => service._id === _id);
        if (existingService) {
          Object.assign(existingService, action.payload);
        }
      })
      // Handle deleteServiceAsync
      .addCase(deleteServiceAsync.fulfilled, (state, action) => {
        const id = action.payload;
        state.services = state.services.filter((service) => service._id !== id);
      });
  },
});

export default servicesSlice.reducer;
