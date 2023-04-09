import { createContext} from "react";

export const initialState = {theme: "", data: []}

const ContextGlobal = createContext(initialState);

export default ContextGlobal;

export const ContextProvider = ({ children }) => {

  return (
    <ContextGlobal.Provider value={{ }}>
      {children}
    </ContextGlobal.Provider>
  );
};