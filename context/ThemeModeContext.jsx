const { createContext, useContext } = require("react");

const ThemeModeContext = createContext();
export const useThemeMode = () => useContext(ThemeModeContext);
export const ThemeModeProvider = ({ value, children }) => {
  return (
    <ThemeModeContext.Provider value={value}>
      {children}
    </ThemeModeContext.Provider>
  );
};
