import { createContext, useContext } from "react";
export const Navigation = createContext(null);
export const useNavigation = () => useContext(Navigation);
