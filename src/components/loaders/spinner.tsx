import joinclasses from "@/utils/join-classes";
import { ISpinnerThemes } from "./types";
interface IProps {
  size?: keyof ISpinnerThemes["size"];
  variant?: keyof ISpinnerThemes["variant"];
}
const themes: ISpinnerThemes = {
  variant: {
    primary: "border-white",
    secondary: "border-blue-500",
  },
  size: {
    sm: "h-[20px] w-[20px]",
    md: "h-[35px] w-[35px]",
  },
};
const Spinner = (props: IProps) => {
  const { size, variant } = props;
  return (
    <div
      className={joinclasses(
        "bg-transparent  h-[20px] w-[20px] rounded-full !border-b-transparent border-2 animate-spin",
        themes.variant[variant ?? "secondary"],
        themes.size[size ?? "sm"]
      )}
    />
  );
};

export default Spinner;
