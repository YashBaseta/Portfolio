import React, { useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themename, setthemename] = useState("dark");
  // const toggeltheme = () => {
  //   themename === "light" ? setthemename("dark") : setthemename("light");
  // };

  return (
    <ThemeContext.Provider value={[{ themename}]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
