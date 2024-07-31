import React from "react";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../redux/customerSlice";
import IconButtonBox from "../form-components/IconButtonBox";

function TableButton({ customer, onEdit }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2">
      <IconButtonBox
        type="button"
        title="Edit"
        src="../photo/edit.png"
        fun={() => onEdit(customer)}
      />
      <IconButtonBox
        type="button"
        bgcolor="red"
        title="Delete"
        src="../photo/bin.png"
        fun={() => dispatch(deleteCustomer(customer.pan))}
      />
    </div>
  );
}

export default TableButton;
