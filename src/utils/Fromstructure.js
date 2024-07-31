// Schema defining the structure of the form fields
export const formSchema = [
  {
    label: "PAN",
    type: "text",
    name: "pan",
    readOnly: false,
  },
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    readOnly: true,
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    readOnly: false,
  },
  {
    label: "Mobile",
    type: "text",
    name: "mobile",
    readOnly: false,
  },
  {
    label: "Addresses",
    type: "array",
    name: "addresses",
    fields: [
      {
        label: "Address Line 1",
        type: "text",
        name: "addressLine1",
      },
      {
        label: "Address Line 2",
        type: "text",
        name: "addressLine2",
      },
      {
        label: "Postcode",
        type: "text",
        name: "postcode",
      },
      {
        label: "City",
        type: "text",
        name: "city",
        readOnly: true,
      },
      {
        label: "State",
        type: "text",
        name: "state",
        readOnly: true,
      },
    ],
  },
];
