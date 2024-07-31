import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("customers")) || [];

const doesCustomerExist = (state, pan) => {
  return state.some((customer) => customer.pan === pan);
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      if (doesCustomerExist(state, action.payload.pan)) {
        alert("Customer already exists.");
      } else {
        state.push(action.payload);
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
    updateCustomer: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.pan === action.payload.pan
      );
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
    deleteCustomer: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.pan === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
