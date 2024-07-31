import { createSlice } from "@reduxjs/toolkit";

// Initialize the state from localStorage or set to an empty array
const initialState = JSON.parse(localStorage.getItem("customers")) || [];

/**
 * Checks if a customer with the given PAN exists in the state.
 *
 * @param {Array} state - The current state of the customers.
 * @param {string} pan - The PAN number to check for.
 * @returns {boolean} - True if customer exists, otherwise false.
 */
const doesCustomerExist = (state, pan) => {
  return state.some((customer) => customer.pan === pan);
};

const customerSlice = createSlice({
  // Name of the slice
  name: "customers",
  // Initial state of the slice
  initialState,
  reducers: {
    /**
     * Adds a new customer to the state if the PAN does not already exist.
     *
     * @param {Object} state - The current state of the customers.
     * @param {Object} action - The action object containing the new customer data.
     */
    addCustomer: (state, action) => {
      if (doesCustomerExist(state, action.payload.pan)) {
        // Alert if customer already exists
        alert("Customer already exists.");
      } else {
        // Add new customer to state
        state.push(action.payload);
        // Save to localStorage
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
    /**
     * Updates an existing customer in the state.
     *
     * @param {Object} state - The current state of the customers.
     * @param {Object} action - The action object containing the updated customer data.
     */
    updateCustomer: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.pan === action.payload.pan
      );
      if (index !== -1) {
        // Update customer data in state
        state[index] = action.payload;
        // Save to localStorage
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
    /**
     * Deletes a customer from the state by their PAN.
     *
     * @param {Object} state - The current state of the customers.
     * @param {Object} action - The action object containing the PAN of the customer to delete.
     */
    deleteCustomer: (state, action) => {
      const index = state.findIndex(
        (customer) => customer.pan === action.payload
      );
      if (index !== -1) {
        // Remove customer from state
        state.splice(index, 1);
        // Save to localStorage
        localStorage.setItem("customers", JSON.stringify(state));
      }
    },
  },
});

// Export actions for use in components
export const { addCustomer, updateCustomer, deleteCustomer } =
  customerSlice.actions;

// Export reducer for configuring the store
export default customerSlice.reducer;
