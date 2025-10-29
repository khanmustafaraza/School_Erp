import React, { createContext, useContext, useState } from "react";

// // Initial state

// todo Create context
const ThemeAppContext = createContext();

// ? Provider component
const ThemeAppProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeAppContext.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </ThemeAppContext.Provider>
  );
};

// // Custom hook to use the auth context
const useTheme = () => {
  const context = useContext(ThemeAppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthAppProvider");
  }
  return context;
};

export { ThemeAppProvider, useTheme };
