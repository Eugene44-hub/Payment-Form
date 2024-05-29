import { IButtonThemes } from "./types";

export default <IButtonThemes>{
  base: "px-3 w-full font-bold flex items-center justify-center md:h-[44px] h-[38px] transition-all rounded-[8px]",
  variant: {
    primary:
      "bg-blue-500 hover:bg-blue-300 active:bg-blue-100 disabled:bg-gray-100 text-white",
    outlined:
      "border border-blue-200 text-blue-200 hover:border-blue-300 active:border-blue-100 disabled:opacity-80",
    disabled: "bg-gray-200",
    disabledOutline:
      "border border-gray-200 text-black-60 hover:border-gray-100 active:border-gray-100 disabled:opacity-80",
    error:
      "bg-red-500 hover:bg-red-500/80 active:bg-red-100 disabled:bg-gray-100 text-white",
  },
  size: {
    sm: "max-w-[104px] text-xs md:text-sm",
    md: "max-w-[121px] text-md md:text-base",
    base: "max-w-[194px] text-md md:text-base",
    fullWidth: "max-w-full text-md md:text-base",
  },
};
