import React, { useContext } from "react";
import AppThemeContext from "../contexts/AppThemeContext";
import AppLocaleContext from "../contexts/AppLocaleContext";

const ContextValueToggler = () => {
  const { value: theme, setValue: setTheme } = useContext(AppThemeContext);
  const { value: locale, setValue: setLocale } = useContext(AppLocaleContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "kg" : "en");
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>

      <button onClick={toggleLocale}>Toggle Locale</button>
    </>
  );
};

export default ContextValueToggler;
