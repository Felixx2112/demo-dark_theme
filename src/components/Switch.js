import React, { useContext } from "react";
import ThemeContext from "../context/index";

import { TiWeatherNight as Moon, TiWeatherSunny as Sun } from "react-icons/ti";

function SwitchTheme() {
  const { dark, toggle } = useContext(ThemeContext);
  console.log(" Switch :", { dark });
  return (
    <button className="Switch" onClick={toggle}>
      <Sun className={`icon ${!dark ? "active" : ""} `} />
      <Moon className={`icon ${dark ? "active" : ""}`} />
    </button>
  );
}

export default React.memo(SwitchTheme);
