import React from "react";

function TableBody({ arr }) {
  return (
    <tbody className="py-2">
      {/* Iterate over the array of customer data */}
      {arr.map((customer, index) => {
        return (
          <tr
            // Unique key for each row, using customer PAN
            key={customer.pan}
            className="bg-white hover:bg-[#eaeaea] border-b-8 border-white"
          >
            {/* Iterate over the customer data for each row */}
            {customer.map((elem) => (
              <td
                key={elem}
                className="whitespace-nowrap px-4 py-3 text-black font-normal"
              >
                {/* Display the cell content */}
                {elem}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
