import React, { useContext } from "react";
import ThemeContext from "../context/index";

function CardTheme(props) {
  const { dark } = useContext(ThemeContext);
  console.log("Dark card", dark);
  return (
    <div className="Card">
      <div className="img" />
      <h2 style={{ textAlign: "center" }}>Image Picsum</h2>
      <button>{dark === true ? "dark" : "light"}</button>
    </div>
  );
}

export default React.memo(CardTheme);
