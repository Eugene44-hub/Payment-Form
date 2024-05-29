import joinclasses from "@/utils/join-classes";
import React, { ReactNode } from "react";
interface IProps {
  children: ReactNode;
  className?: string;
}
const GeneralLayout = (props: IProps) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={joinclasses(
        "max-w-[1440px] mx-auto md:pl-[57px] md:pr-[61px] px-5 ",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default GeneralLayout;
