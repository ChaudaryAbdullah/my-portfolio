import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap your app and provide dark mode functionality
export const ThemeProvider = ({ children }) => {
  // State to track if dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // On initial mount, load the user's saved theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme)); // Convert string to boolean
    }
  }, []);

  // When darkMode changes, update the body's class and save the preference
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Function to toggle the darkMode value
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Provide darkMode state and toggle function to all consumers
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context easily within components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
