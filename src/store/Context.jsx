import { createContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const data = { isOpen, setIsOpen };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default StateContext;
