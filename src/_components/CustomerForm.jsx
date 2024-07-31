import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customerSchema } from "../utils/Validation";
import { addCustomer, updateCustomer } from "../redux/customerSlice";
import { formSchema } from "../utils/Fromstructure";
import InputField from "./form-components/InputField";
import useInitialValues from "../hook/useInitialValues";
import usePANVerification from "../hook/usePANVerification";
import usePostcodeVerification from "../hook/usePostcodeVerification";
import ButtonBox from "./form-components/ButtonBox";

const CustomerForm = ({ customer, onClose, setMode }) => {
  const dispatch = useDispatch();
  const initialValues = useInitialValues(formSchema);

  // Initialize form with validation schema and default values
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customerSchema),
    defaultValues: initialValues,
  });

  // Reset form when customer changes
  useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer, reset]);

  // Initialize field array for addresses
  const { fields, append } = useFieldArray({
    control,
    name: "addresses",
  });

  // Handle form submission
  const onSubmit = (data) => {
    if (customer) {
      dispatch(updateCustomer(data));
    } else {
      dispatch(addCustomer(data));
    }
    reset(initialValues);
    onClose();
    setTheMode();
  };

  // Reset mode after form submission
  function setTheMode() {
    setMode("");
  }

  // Custom hooks for PAN and postcode verification
  const { loading: panLoading, verifyPAN } = usePANVerification(setValue);
  const { loading: postcodeLoading, verifyPostcode } =
    usePostcodeVerification(setValue);

  return (
    <div className=" bg-white p-8 rounded-lg w-full lg:w-[768px] h-full">
      <div className="overflow-x-scroll h-full">
        <div className="lg:inline-block lg:min-w-full">
          <div className="lg:overflow-hidden">
            {/* Form submission handler */}
            <form className="min-w-full" onSubmit={handleSubmit(onSubmit)}>
              <p className="mb-2">
                <b>Alert:</b> Write only the PAN number to retrieve the name
              </p>
              <div className="lg:grid  lg:grid-cols-2 gap-4">
                {formSchema.map((elem, i) => {
                  if (elem.type !== "array") {
                    // Render input fields for non-array elements
                    return (
                      <InputField
                        key={i}
                        register={register}
                        registerFormate={elem.name}
                        value={elem}
                        handleBlur={
                          elem.name === "pan"
                            ? (e) => verifyPAN(e.target.value)
                            : undefined
                        }
                        loading={elem.name === "pan" ? panLoading : undefined}
                        errors={errors}
                        control={control}
                      />
                    );
                  } else {
                    // Render input fields for address array
                    return (
                      <div className="col-span-2" key={i}>
                        {fields.map((address, index) => (
                          <div className="grid grid-cols-2 gap-4 " key={index}>
                            <h4 className="col-span-2 -mb-3">
                              Address {index + 1}
                            </h4>
                            <p className="col-span-2">
                              <b>Alert:</b> Write the pincode to retrieve the
                              city name and state name.
                            </p>
                            {elem.fields.map((val, k) => (
                              <InputField
                                key={k}
                                register={register}
                                value={val}
                                handleBlur={
                                  val.name === "postcode"
                                    ? (e) =>
                                        verifyPostcode(index, e.target.value)
                                    : undefined
                                }
                                registerFormate={`addresses.${index}.${val.name}`}
                                loading={
                                  val.name === "postcode"
                                    ? postcodeLoading
                                    : undefined
                                }
                                errors={errors.addresses?.[index]}
                                control={control}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    );
                  }
                })}
              </div>

              {/* Form buttons */}
              <div className="flex flex-wrap gap-2 mt-5">
                <ButtonBox
                  type={"button"}
                  title={"Cancel"}
                  bgcolor={"red"}
                  fun={() => setTheMode("")}
                />
                <ButtonBox
                  type={"button"}
                  title={"Add Address"}
                  fun={() =>
                    append({
                      addressLine1: "",
                      addressLine2: "",
                      postcode: "",
                      city: "",
                      state: "",
                    })
                  }
                />
                <ButtonBox
                  type={"submit"}
                  title={customer ? "Update" : "Submit"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
