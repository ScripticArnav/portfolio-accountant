import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/authSlice.js"
import serviceReducer from "./features/serviceSlice.js"

export const store = configureStore({
    auth: authReducer,
    services: serviceReducer
})