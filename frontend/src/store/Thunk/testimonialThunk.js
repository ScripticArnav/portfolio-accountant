import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import backendUrl from "../../url";

const baseUrl = `${backendUrl}/testimonials`

// fetching the testimonials
export const fetchTestimonials = createAsyncThunk('testimonials/fetchTestimonials', async() => {
    const testimonials = await axios.get(`${baseUrl}`)
    return testimonials
})

// adding new testimonial
export const addTestimonialAsync = createAsyncThunk('testimonials/addTestimonialAsync', async (newTestimonial) => {
    const formData = new FormData();
    formData.append('name', newTestimonial.name);
    formData.append('review', newTestimonial.review);
    formData.append('rating', newTestimonial.raing);
  
    const testimonial = await axios.post(baseUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return testimonial;
  });

// Async thunk to update a testimonial
export const updateTestimonialAsync = createAsyncThunk('testimonials/updateTestimonialAsync', async (updatedTestimonial) => {
    const { id, ...data } = updatedTestimonial;
    const testimonial = await axios.put(`${baseUrl}/${id}`, data);
    return testimonial;
  });
  
  // Async thunk to delete a testimonial
  export const deleteTestimonialAsync = createAsyncThunk('testimonials/deleteTestimonialAsync', async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  });