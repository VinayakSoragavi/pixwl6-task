import React from "react";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../redux/customerSlice";
import IconButtonBox from "../form-components/IconButtonBox";

function TableButton({ customer, onEdit }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2">
      {/* Edit button */}
      <IconButtonBox
        // Set button type to "button"
        type="button"
        // Button label
        title="Edit"
        // Path to the edit icon image
        src="../photo/edit.png"
        // Function to call when button is clicked
        fun={() => onEdit(customer)}
      />
      {/* Delete button */}
      <IconButtonBox
        // Set button type to "button"
        type="button"
        // Background color for the delete button
        bgcolor="red"
        // Button label
        title="Delete"
        // Path to the delete icon image
        src="../photo/bin.png"
        // Dispatch action to delete customer
        fun={() => dispatch(deleteCustomer(customer.pan))}
      />
    </div>
  );
}

export default TableButton;
