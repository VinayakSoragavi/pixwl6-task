import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "../redux/customerSlice";
import ButtonBox from "./form-components/ButtonBox";
import { formSchema } from "../utils/Fromstructure";
import IconButtonBox from "./form-components/IconButtonBox";
import HeadLine from "./HeadLine";
import TableHead from "./table-components/TableHead";
import TableBody from "./table-components/TableBody";
import TableButton from "./table-components/TableButton";

const CustomerList = ({ onEdit, setMode }) => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  function AddressModification(data) {
    let menu = data[0];
    let dat = Object.keys(menu);
    let update = [];
    dat.forEach((elem) => {
      if (elem !== "postcode") {
        update.push(menu[elem]);
      }
    });
    update.push(menu.postcode);
    return update.join(", ");
  }

  function setTheMode() {
    setMode("Add a new customer");
  }

  const headerArr = useCallback(() => {
    const initialArr = ["SL.No"];
    const namesArr = formSchema.map((elem) => elem.name);
    const finalArr = [...initialArr, ...namesArr, "address count", "Action"];
    return finalArr;
  }, [formSchema]);

  const headers = useMemo(() => headerArr(), [headerArr]);

  const bodyArr = useCallback(() => {
    return customers.map((customer, index) => {
      const serialno = index + 1;
      const subarr = Object.values(customer).slice(0, -1);
      const address = [
        AddressModification(customer.addresses),
        customer.addresses.length,
        <TableButton key={customer.pan} customer={customer} onEdit={onEdit} />,
      ];
      return [serialno, ...subarr, ...address];
    });
  }, [customers, dispatch, onEdit]);

  const bodys = useMemo(() => bodyArr(), [bodyArr]);

  return (
    <div className="flex flex-col bg-white p-8 rounded-lg  h-full">
      <div className="mb-2">
        <ButtonBox
          type={"button"}
          title={"+ New Customer"}
          fun={() => setTheMode()}
        />
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full ">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <TableHead arr={headers} />
              <TableBody arr={bodys} />
            </table>

            {customers.length == 0 && (
              <div className="w-full h-56 bg-[#e5e8e8] flex items-center justify-center pb-7 px-10">
                <HeadLine
                  title={"There is no customer. Add a new customer... "}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
