import React from "react";

function TableHead({ arr }) {
  return (
    <thead className="border border-neutral-200 font-medium bg-[#eaeaea] border-b-8 border-white">
      <tr>
        {arr.map((elem) => {
          return (
            <th
              key={elem}
              scope="col"
              className="px-4 py-4 text-[#141414] text-[16px] font-medium"
            >
              {elem}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default TableHead;
