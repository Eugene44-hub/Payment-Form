/* eslint-disable no-unexpected-multiline */
import * as Yup from "yup";
interface ValidationArgsType {
  errorMessage?: string;
  required?: boolean;
}

interface FieldMatchArgsType {
  fieldName: string;
  required?: boolean;
  errorMessages?: {
    requiredError?: string;
    fieldMatchError?: string;
  };
}
interface TextFieldArgsType extends ValidationArgsType {
  alphaNumericError?: string;
}

// Creating validation schema
const createValidationSchema = (
  args: Record<
    string | number,
    | Yup.StringSchema<
        Yup.Maybe<string | undefined>,
        Yup.AnyObject,
        undefined,
        ""
      >
    | Yup.NumberSchema<
        Yup.Maybe<number | undefined>,
        Yup.AnyObject,
        undefined,
        ""
      >
    | Yup.ArraySchema<
        (string | number)[] | undefined,
        Yup.AnyObject,
        undefined,
        ""
      >
  >
) => Yup.object().shape(args);

// Schemas validations
const schemaValidation = {
  // Email Validation
  emailValidation: (args?: ValidationArgsType) => {
    const required = args?.required ?? true;
    return Yup.string()
      .email("Enter a valid email address")
      [required ? "required" : "notRequired"](
        args?.errorMessage ?? "Email is required"
      );
  },

  // Required Validation for normal fields
  requiredFieldValidation: (args?: ValidationArgsType) => {
    const required = args?.required ?? true;

    return Yup.string()[required ? "required" : "notRequired"](
      args?.errorMessage ?? "This field is required"
    );
  },

  requiredNumberFieldValidation: (args?: ValidationArgsType) => {
    const required = args?.required ?? true;

    return Yup.number()
      [required ? "required" : "notRequired"](
        args?.errorMessage ?? "This field is required"
      )
      .typeError("This field must be a number");
  },
  requiredTextFieldValidation: (args?: TextFieldArgsType) => {
    const regex = /^[^0-9]*$/;

    const required = args?.required ?? true;

    return Yup.string()
      [required ? "required" : "notRequired"](
        args?.errorMessage ?? "This field is required"
      )
      .matches(
        regex,
        args?.alphaNumericError ??
          "This field should not contain a numeric character"
      );
  },

  // Password validation
  passwordValidation: (args?: ValidationArgsType) => {
    const required = args?.required ?? true;
    return Yup.string()
      [required ? "required" : "notRequired"](
        args?.errorMessage ?? "Password is required"
      )
      .min(8, "Password must be up to 8 characters");
  },
  // Password validation
  listSelectionValidation: (args?: ValidationArgsType) => {
    const required = args?.required ?? true;
    return Yup.array()
      [required ? "required" : "notRequired"](
        args?.errorMessage ?? "Select at least one item"
      )
      .min(1, "An must be selected from the list");
  },

  // Validating if this field matches another field
  matchFieldValidation: ({
    errorMessages,
    required = true,
    fieldName,
  }: FieldMatchArgsType) =>
    Yup.string()
      [required ? "required" : "notRequired"](
        errorMessages?.requiredError ?? "This field is required"
      )
      .oneOf(
        [Yup.ref(fieldName)],
        errorMessages?.fieldMatchError ?? "Field does not match"
      ),
};

export { schemaValidation, createValidationSchema };
