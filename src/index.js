import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ContextValueToggler from "./components/ContextValueToggler";
import ContextValueIndicator from "./components/ContextValueIndicator";
import AppThemeContext from "./contexts/AppThemeContext";
import AppLocaleContext from "./contexts/AppLocaleContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [locale, setLocale] = useState("en");

  const themeContextValue = {
    value: theme,
    setValue: setTheme
  };
  const localeContextValue = {
    value: locale,
    setValue: setLocale
  };

  return (
    <div className="App">
      <AppThemeContext.Provider value={themeContextValue}>
        <AppLocaleContext.Provider value={localeContextValue}>
          <ContextValueIndicator />
          <ContextValueToggler />
        </AppLocaleContext.Provider>
      </AppThemeContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
