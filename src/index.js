import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainMenu from "./MainMenu";
import "./css files/index.css";
ReactDOM.render(
  <div className='grid-container'>
    <MainMenu />
    <App />
  </div>,
  document.getElementById("root")
);
