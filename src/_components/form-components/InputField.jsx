import InputBox from "./InputBox";
import SelectBox from "./SelectBox";

function InputField({
  register,
  value,
  handleBlur,
  loading,
  errors,
  control,
  registerFormate,
}) {
  function selectInputField(type) {
    switch (type) {
      case "text" || "email" || "number": {
        return (
          <InputBox
            register={register}
            handlePANBlur={handleBlur}
            registerFormate={registerFormate}
          />
        );
      }
      case "select": {
        return (
          <SelectBox
            control={control}
            name={value.name}
            registerFormate={registerFormate}
            register={register}
          />
        );
      }
      default: {
        return (
          <InputBox
            register={register}
            handlePANBlur={handleBlur}
            registerFormate={registerFormate}
          />
        );
      }
    }
  }

  return (
    <div className="flex flex-wrap mb-2">
      <label className="text-[14px] font-medium w-full mb-2">
        {value.label}
      </label>
      {selectInputField(value.type)}
      {loading && value.name === "pan" && <span>Loading...</span>}
      {errors?.[value.name] && (
        <p className="text-red-500 text-[13px]">{errors[value.name].message}</p>
      )}
    </div>
  );
}

export default InputField;
