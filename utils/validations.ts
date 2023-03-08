import * as Yup from "yup";

export const baseSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  input: Yup.string()
    .required()
    .matches(/^[a-zA-Z][a-zA-Z0-9]*$|^[0-9]+$/, {
      message:
        "Input must start with a letter and contain only letters and numbers",
      excludeEmptyString: true,
    })
    .max(10, "Input can have no more than 10 characters")
    .test({
      name: "max-digits",
      message: "Input can have no more than 5 digits",
      test: (value) => !value || value.replace(/[a-zA-Z]/g, "").length <= 5,
    }),
});

const item1Schema = Yup.object().shape({
  item: Yup.object().shape({
    item1Checkbox: Yup.bool()
      .defined("This field is required")
      .oneOf([true], "This field is required"),
    item1Textbox: Yup.string().required("This field is required"),
    item1Numberbox: Yup.number().min(
      0,
      "Value must be greater than or equal to 0"
    ),
  }),
});

const item2Schema = Yup.object().shape({
  item: Yup.object().shape({
    item2Checkbox: Yup.bool()
      .defined("This field is required")
      .oneOf([true], "This field is required"),
    item2SelectBox: Yup.array()
      .min(1, "Please select at least one item")
      .required("Please select an item"),
    item2Textbox: Yup.string().required("This field is required"),
    item2Numberbox: Yup.number()
      .required("This field is required")
      .min(0, "Value must be greater than or equal to 0"),
  }),
});

const item3Schema = Yup.object().shape({
  item: Yup.object().shape({
    item3Textarea: Yup.string().required("This field is required"),
    item3File: Yup.string().required("This field is required"),
    item3Textbox: Yup.string().required("This field is required"),
  }),
});

export const combineSchemas = (category: string | undefined) => {
  switch (category) {
    case "1":
      return baseSchema.concat(item1Schema);
    case "2":
      return baseSchema.concat(item2Schema);
    case "3":
      return baseSchema.concat(item3Schema);
    default:
      return baseSchema;
  }
};
