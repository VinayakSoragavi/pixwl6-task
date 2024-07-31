import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CustomerForm from "./_components/CustomerForm";
import CustomerList from "./_components/CustomerList";
import HeadLine from "./_components/HeadLine";

const App = () => {
  // State to manage the currently editing customer
  const [editingCustomer, setEditingCustomer] = useState(null);
  // State to manage the mode (e.g., "Edit the customer")
  const [mode, setMode] = useState("");

  // Handler to set the mode to edit and assign the customer to be edited
  const handleEdit = (customer) => {
    setMode("Edit the customer");
    setEditingCustomer(customer);
  };

  // Handler to close the form and reset the editing customer
  const handleCloseForm = () => {
    setEditingCustomer(null);
  };

  return (
    <Provider store={store}>
      <div className=" bg-[#e5e8e8] h-screen  ">
        {mode != "" && (
          <div className=" w-full h-full fixed flex flex-col  bg-[#00000057] md:px-10 lg:px-20">
            <div className="pl-8">
              <HeadLine title={mode} />
            </div>
            <div className="flex justify-center items-center h-full overflow-scroll pb-7">
              {editingCustomer ? (
                <CustomerForm
                  customer={editingCustomer}
                  onClose={handleCloseForm}
                  setMode={setMode}
                />
              ) : (
                <CustomerForm onClose={handleCloseForm} setMode={setMode} />
              )}
            </div>
          </div>
        )}
        {/* Main content */}
        <div className="h-full pb-7 px-5 md:px-10 lg:px-20 flex flex-col">
          <HeadLine
            color={mode == "" ? "black" : "#e5e8e8"}
            title={"Customer Management"}
          />
          <CustomerList onEdit={handleEdit} setMode={setMode} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
