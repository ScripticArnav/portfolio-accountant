import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/authSlice.js"
import serviceReducer from "./features/serviceSlice.js"
import testimonialReducer from "./features/testimonialSlice.js"

export const store = configureStore({
    auth: authReducer,
    service: serviceReducer,
    testimonial: testimonialReducer,
})