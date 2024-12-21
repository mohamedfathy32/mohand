// NightModeContext.js
import { createContext, useContext, useState } from "react";

const NightModeContext = createContext();

export const useNightMode = () => useContext(NightModeContext);

export const NightModeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => setIsNightMode(prevMode => !prevMode);

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
