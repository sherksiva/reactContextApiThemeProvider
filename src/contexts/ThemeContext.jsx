import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext(null); // Default value is often null in modern React

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State to hold the current theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value prop makes the state and updater function available to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily consume the context in functional components
export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;