import React from "react";
import CardTheme from "./components/Card";
import SwitchTheme from "./components/Switch";
import "antd/dist/antd.css";
import ThemeProvider from "./context/ThemeProvider";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h2 style={{ textAlign: "center" }}>React Context</h2>
        <CardTheme />
        <SwitchTheme />
      </div>
    </ThemeProvider>
  );
}
export default App;
