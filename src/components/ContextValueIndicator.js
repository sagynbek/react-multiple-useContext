import React, { useContext } from "react";
import AppThemeContext from "../contexts/AppThemeContext";
import AppLocaleContext from "../contexts/AppLocaleContext";

const ContextValueIndicator = () => {
  const { value: theme } = useContext(AppThemeContext);
  const { value: locale } = useContext(AppLocaleContext);

  return (
    <>
      <h4>Theme: {theme}</h4>
      <h4>Locale: {locale}</h4>
    </>
  );
};

export default ContextValueIndicator;
