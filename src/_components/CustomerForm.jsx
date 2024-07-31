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

  useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer, reset]);

  const { fields, append } = useFieldArray({
    control,
    name: "addresses",
  });

  const onSubmit = (data) => {
    // Check for duplicate email and PAN
    if (customer) {
      dispatch(updateCustomer(data));
    } else {
      dispatch(addCustomer(data));
    }
    reset(initialValues);
    onClose();
    setTheMode();
  };

  function setTheMode() {
    setMode("");
  }

  const { loading: panLoading, verifyPAN } = usePANVerification(setValue);
  const { loading: postcodeLoading, verifyPostcode } =
    usePostcodeVerification(setValue);

  return (
    <div className=" bg-white p-8 rounded-lg w-full lg:w-[768px] h-full">
      <div className="overflow-x-scroll h-full">
        <div className="lg:inline-block lg:min-w-full">
          <div className="lg:overflow-hidden">
            <form className="min-w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:grid  lg:grid-cols-2 gap-4">
                {formSchema.map((elem, i) => {
                  if (elem.type !== "array") {
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
                    return (
                      <div className="col-span-2" key={i}>
                        {fields.map((address, index) => (
                          <div className="grid grid-cols-2 gap-4 " key={index}>
                            <h4 className="col-span-2">Address {index + 1}</h4>
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

              <div className="flex gap-2 mt-5">
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
