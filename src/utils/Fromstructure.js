// Schema defining the structure of the form fields
export const formSchema = [
  {
    label: "PAN",
    type: "text",
    name: "pan",
  },
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Mobile",
    type: "text",
    name: "mobile",
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
      },
      {
        label: "State",
        type: "text",
        name: "state",
      },
    ],
  },
];
