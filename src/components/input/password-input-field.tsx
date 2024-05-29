"use client";
import { LuEye, LuEyeOff } from "react-icons/lu";
import InputField from "./input-field";
import ComponentVisibility from "../visibility/component-visibility";
import { useRef } from "react";
import useToggle from "@/hooks/use-toggle";
import joinclasses from "@/utils/join-classes";
interface IProps {
  label?: string;
  error?: Record<string, string>;
  touched?: Record<string, boolean>;
  className?: string;
}
const PasswordInputField = (props: IProps) => {
  const { label, className, ...rest } = props;
  const [showPassword, handleShowPassword] = useToggle(false);
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <InputField
      ref={ref}
      label={label}
      type={showPassword ? "text" : "password"}
      className={joinclasses(className)}
      rightIcon={
        <button type="button" onClick={handleShowPassword}>
          <ComponentVisibility appear={!showPassword}>
            <LuEye />
          </ComponentVisibility>
          <ComponentVisibility appear={showPassword}>
            <LuEyeOff />
          </ComponentVisibility>
        </button>
      }
      {...rest}
    />
  );
};

export default PasswordInputField;
