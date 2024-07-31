import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    // Register the customerReducer under the "customers" key in the store
    customers: customerReducer,
  },
});

export default store;
