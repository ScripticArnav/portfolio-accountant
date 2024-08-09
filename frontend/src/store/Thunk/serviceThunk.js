import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import backendUrl from "../../url";

const baseUrl = `${backendUrl}/services`

// fetching the services
export const fetchServices = createAsyncThunk('sefvices/fetchServices', async() => {
    const services = await axios.get(`${baseUrl}`)
    return services
})

// adding new service
export const addServiceAsync = createAsyncThunk('services/addService', async (newService) => {
    const formData = new FormData();
    formData.append('title', newService.title);
    formData.append('description', newService.description);
    formData.append('price', newService.price);
    formData.append('photo', newService.photo);
  
    const service = await axios.post(baseUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  });

// Async thunk to update a service
export const updateServiceAsync = createAsyncThunk('services/updateService', async (updatedService) => {
    const { id, ...data } = updatedService;
    const response = await axios.put(`${baseUrl}/${id}`, data);
    return response.data;
  });
  
  // Async thunk to delete a service
  export const deleteServiceAsync = createAsyncThunk('services/deleteService', async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  });


