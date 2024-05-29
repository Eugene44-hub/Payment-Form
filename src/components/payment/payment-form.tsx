"use client";
import React, { FormEvent, useRef } from "react";
import InputField from "../input/input-field";
import PasswordInputField from "../input/password-input-field";
import Button from "../buttons/button";
import { useFormik } from "formik";
import {
  createValidationSchema,
  schemaValidation,
} from "@/helpers/validation-schemas";
import usePaystack from "@/hooks/use-paystack";
import { toast } from "react-toastify";

interface IForms {
  email: string;
  amount: number;
  password: string;
}
const PaymentForm = () => {
  const { emailValidation, requiredNumberFieldValidation, passwordValidation } =
    schemaValidation;

  const { handlePayment } = usePaystack();

  const { touched, errors, getFieldProps, handleSubmit } = useFormik<IForms>({
    initialValues: {
      email: "",
      amount: 0,
      password: "",
    },
    validationSchema: createValidationSchema({
      email: emailValidation(),
      amount: requiredNumberFieldValidation().min(
        100,
        "least amount is 100 naira"
      ),
      password: passwordValidation().matches(
        /^99887788$/,
        "incorrect password"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      handlePayment({
        amount: values.amount,
        email: values.email,
        onClose: () => {
          console.log("closed");
        },
        onSuccess: () => {
          toast.success(
            "Payment successful, check your email for payment receipt"
          );
          resetForm();
        },
      });
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[500px] mx-auto w-full shadow-xl border rounded-xl"
    >
      <div className="p-5 space-y-5">
        <InputField
          {...getFieldProps("email")}
          touched={touched}
          error={errors}
          type="email"
          label="Email"
        />
        <InputField
          {...getFieldProps("amount")}
          touched={touched}
          error={errors}
          type="number"
          label="Amount"
        />
        <PasswordInputField
          {...getFieldProps("password")}
          touched={touched}
          error={errors}
          label="Password"
        />
        <Button type="submit">Make Payment</Button>
      </div>
    </form>
  );
};

export default PaymentForm;
