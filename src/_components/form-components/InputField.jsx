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
  // Function to select the appropriate input field based on type
  function selectInputField(type) {
    switch (type) {
      // Render InputBox for text, email, or number types
      case "text" || "email" || "number": {
        return (
          <InputBox
            register={register}
            handlePANBlur={handleBlur}
            registerFormate={registerFormate}
          />
        );
      }
      // Render SelectBox for select type
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
      // Default to InputBox for any other types
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
      {/* Label for the input field */}
      <label className="text-[14px] font-medium w-full mb-2">
        {value.label}
      </label>
      {/* Render the appropriate input field based on type */}
      {selectInputField(value.type)}
      {/* Display loading indicator if applicable */}
      {loading && value.name === "pan" && <span>Loading...</span>}
      {/* Display error message if there are errors */}
      {errors?.[value.name] && (
        <p className="text-red-500 text-[13px]">{errors[value.name].message}</p>
      )}
    </div>
  );
}

export default InputField;
