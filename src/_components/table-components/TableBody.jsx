import React from "react";

function TableBody({ arr }) {
  return (
    <tbody className="py-2">
      {arr.map((customer, index) => {
        return (
          <tr
            key={customer.pan}
            className="bg-white hover:bg-[#eaeaea] border-b-8 border-white"
          >
            {customer.map((elem) => (
              <td
                key={elem}
                className="whitespace-nowrap px-4 py-3 text-black font-normal"
              >
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
