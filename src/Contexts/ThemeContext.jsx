import React from "react";
import useTheme from "../Hooks/useTheme";

export const ThemeContext = React.createContext({});

export const ThemeProvider = ({ children }) => {
  const value = useTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
