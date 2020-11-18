import React, { Component } from "react";
import "./css files/mainMenu.css";
class MainMenu extends Component {
  state = { swatchSelected: "blue" };

  selectedBlue = () => {
    this.setState({ swatchSelected: "blue" });
  };
  selectedRed = () => {
    this.setState({ swatchSelected: "red" });
  };

  selectedYellow = () => {
    console.log("yellow");
    this.setState({ swatchSelected: "yellow" });
  };

  render() {
    return (
      <div className='menu'>
        <p>
          <span style={{ fontWeight: "bold" }}>A Typical</span> To Do List
        </p>
        <hr />
        <div className='swatches'>
          <button onClick={this.selectedBlue}> Blue </button>
          <button onClick={this.selectedRed}> Red </button>
          <button onClick={this.selectedYellow}> Yellow </button>
        </div>
        <div className='listOfToDo'></div>
      </div>
    );
  }
}

export default MainMenu;
