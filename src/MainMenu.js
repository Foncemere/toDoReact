import React, { Component } from "react";
import "./css files/mainMenu.css";
class MainMenu extends Component {
  state = {};
  render() {
    return (
      <div className='menu'>
        <p>
          <span style={{ fontWeight: "bold" }}>A Typical</span> To Do List
        </p>
        <hr />
      </div>
    );
  }
}

export default MainMenu;
