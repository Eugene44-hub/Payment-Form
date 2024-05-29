import { useState } from "react";

const useToggle = (initialState: boolean): [toggle: boolean, () => void] => {
  const [toggle, setToggle] = useState(initialState);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, handleToggle];
};

export default useToggle;