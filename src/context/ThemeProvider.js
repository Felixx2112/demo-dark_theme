import React, { useEffect, useState } from "react";
import ThemeContext from "./index";
import PropTypes from "prop-types";

const themeLight = [
  "--border: rgba(0, 0, 0, 0.2)",
  "--shadow: #000",
  "--heading: rgba(255, 100, 0, 1)",
  "--main: #1d8f13",
  "--text: #000",
  "--textAlt: #fff",
  "--inactive: rgba(0, 0, 0, 0.3)",
  "--background: #fff",
];

const themeDark = [
  "--border: rgba(255,255,255,.1)",
  "--shadow: #000",
  "--heading: rgba(255, 255, 5, .9)",
  "--main: #79245f",
  "--text: rgb(255, 255, 255)",
  "--textAlt: #fff",
  "--inactive: rgba(255, 255, 255, .3)",
  "--background: #2D2D2D",
];

function ThemeProvider(props) {
  const [dark, setDark] = useState(false);

  // goi no trong componentDidMount va componentDidUpdate
  const applyTheme = (theme) => {
    // css cho toan bo trang
    const root = document.getElementsByTagName("html")[0];
    console.log(root);
    root.style.cssText = theme.join(";");
  };

  const toggle = () => {
    // css cho the body
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
    setDark(!dark);

    // luu vao trong localStorage
    window.localStorage.setItem("dark-theme", !dark);
  };

  useEffect(() => {
    function setTheme() {
      const lastTheme = window.localStorage.getItem("dark-theme");
      if (lastTheme === "true") {
        setDark(true);
      } else {
        setDark(false);
      }
    }
    setTheme();

    const theme = window.localStorage.getItem("dark-theme");
    if (theme === "true") {
      applyTheme(themeDark);
    } else {
      applyTheme(themeLight);
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark: dark, toggle: toggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
