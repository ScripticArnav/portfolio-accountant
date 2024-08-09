import { createSlice } from '@reduxjs/toolkit';
import { fetchTestimonials, addTestimonialAsync, updateTestimonialAsync, deleteTestimonialAsync } from '../Thunk/testimonialThunk';

const TestimonialSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Synchronous actions can still be added here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle addTestimonialAsync
      .addCase(addTestimonialAsync.fulfilled, (state, action) => {
        state.testimonials.push(action.payload);
      })
      // Handle updateTestimonialAsync
      .addCase(updateTestimonialAsync.fulfilled, (state, action) => {
        const { _id } = action.payload;
        const existingTestimonial = state.testimonials.find((testimonial) => testimonial._id === _id);
        if (existingTestimonial) {
          Object.assign(existingTestimonial, action.payload);
        }
      })
      // Handle deleteTestimonialAsync
      .addCase(deleteTestimonialAsync.fulfilled, (state, action) => {
        const id = action.payload;
        state.testimonials = state.testimonials.filter((Testimonial) => Testimonial._id !== id);
      });
  },
});

export default TestimonialSlice.reducer;
