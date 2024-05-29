"use client";
import React, { ForwardedRef, ReactNode, forwardRef } from "react";
import classes from "./input.themes";
import ComponentVisibility from "../visibility/component-visibility";
import { IInputThemes } from "./types";
import joinclasses from "@/utils/join-classes";
interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactNode;
  variant?: keyof IInputThemes["variant"];
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  error?: Record<string, any>;
  touched?: Record<string, boolean>;
  type?: React.HTMLInputTypeAttribute;
  containerClasses?: string;
  fieldClasses?: string;
  labelClasses?: string;
  labelWidgetTrigger?: ReactNode;
  errorClasses?: string;
}
// eslint-disable-next-line react/display-name
const InputField = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      className,
      errorClasses,
      name,
      label,
      variant,
      error,
      touched,
      leftIcon,
      rightIcon,
      type,
      fieldClasses,
      containerClasses,
      labelClasses,
      labelWidgetTrigger,
      ...rest
    } = props;

    const formError = error && error[name ?? ""];
    const formTouched = touched && touched[name ?? ""];
    return (
      <div className={containerClasses}>
        {/* label */}
        <ComponentVisibility appear={!!label}>
          <div
            className={joinclasses(
              "mb-1 w-fit block text-[#121520]",
              labelClasses
            )}
          >
            <label htmlFor={name}>{label}</label>
            {labelWidgetTrigger}
          </div>
        </ComponentVisibility>

        <div
          className={joinclasses(
            "flex",
            classes.base,
            classes.variant[variant ?? "primary"],
            className
          )}
        >
          {/* Left Icon  */}
          <div className="flex justify-center items-center px-2">
            <ComponentVisibility appear={!!leftIcon}>
              {leftIcon}
            </ComponentVisibility>
          </div>

          {/* Input field */}
          <div className="flex-1 h-full">
            <input
              name={name}
              type={!type ? "text" : type}
              className={joinclasses(
                "w-full outline-none  h-full bg-transparent",
                rest.disabled ? "cursor-not-allowed opacity-50" : "",
                fieldClasses
              )}
              ref={ref}
              {...rest}
            />
          </div>

          {/* Right Icon  */}
          <div className="flex justify-center items-center px-2">
            <ComponentVisibility appear={!!rightIcon}>
              {rightIcon}
            </ComponentVisibility>
          </div>
        </div>

        <ComponentVisibility appear={!!formTouched && !!formError}>
          <p className={joinclasses("text-red-500 text-xs mt-2", errorClasses)}>
            {formError}
          </p>
        </ComponentVisibility>
      </div>
    );
  }
);

export default InputField;
