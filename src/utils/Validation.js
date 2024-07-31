import * as yup from "yup";

// Validation of the PAN characters
const panRegExp = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

// Validation of the mobile characters
const mobileRegExp = /^[0-9]{10}$/;

// Validation of the postcode characters
const postcodeRegExp = /^[0-9]{6}$/;

// Address schema definition
const addressSchema = yup.object().shape({
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string(),
  postcode: yup
    .string()
    .matches(postcodeRegExp, "Invalid postcode format")
    .required("Postcode is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
});

// Main customer schema definition
export const customerSchema = yup.object().shape({
  pan: yup
    .string()
    .matches(panRegExp, "Invalid PAN format")
    .required("PAN is required"),
  fullName: yup
    .string()
    .max(140, "Full Name must be at most 140 characters")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .max(255, "Email must be at most 255 characters")
    .required("Email is required"),
  mobile: yup
    .string()
    .matches(mobileRegExp, "Invalid mobile number format")
    .required("Mobile number is required"),
  addresses: yup
    .array()
    .of(addressSchema)
    .min(1, "At least one address is required")
    .max(10, "At most 10 addresses are allowed"),
});
