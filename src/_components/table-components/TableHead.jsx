import React from "react";

function TableHead({ arr }) {
  return (
    <thead className="border border-neutral-200 font-medium bg-[#eaeaea] border-b-8 border-white">
      {/* Table header row */}
      <tr>
        {/* Map over the array to create table header cells */}
        {arr.map((elem) => {
          return (
            <th
              // Unique key for each header cell
              key={elem}
              // Define the scope of the header cell
              scope="col"
              className="px-4 py-4 text-[#141414] text-[16px] font-medium"
            >
              {/* Display the header text */}
              {elem}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
