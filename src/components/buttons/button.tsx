import themes from "./button.themes";
import { IButtonThemes } from "./types";
import { ForwardedRef, ReactNode, forwardRef } from "react";
import ComponentVisibility from "../visibility/component-visibility";
import Spinner from "../loaders/spinner";
import joinclasses from "@/utils/join-classes";
import { ISpinnerThemes } from "../loaders/types";
interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: keyof IButtonThemes["size"];
  variant?: keyof IButtonThemes["variant"];
  children: ReactNode;
  loading?: boolean;
}
// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (props: IProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, variant, size, children, loading, ...rest } = props;
    return (
      <button
        className={joinclasses(
          themes.base,
          themes.variant[variant ?? "primary"],
          themes.size[size ?? "fullWidth"],
          className
        )}
        ref={ref}
        {...rest}
      >
        <ComponentVisibility appear={!loading}>{children}</ComponentVisibility>

        <ComponentVisibility appear={!!loading}>
          <Spinner
            variant={
              (variant as keyof ISpinnerThemes["variant"]) ??
              ("primary" as keyof ISpinnerThemes["variant"])
            }
          />
        </ComponentVisibility>
      </button>
    );
  }
);

export default Button;
