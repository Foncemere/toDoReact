import React, { Component } from "react";
import "./css files/app.css";
import Page from "./Page";
import pageNumber from "./toDoData.json";

class App extends Component {
  state = {
    pagesAvailable: [0, 1],
    pageSelected: 0,
    x: 0,
    pages: pageNumber,
    rightButtonVisibility: "visible",
    leftButtonVisibility: "hidden",
    gradientOne: "2193b0",
    gradientTwo: "6dd5ed",
  };

  showButtons = () => {
    if (this.state.pageSelected === 0) {
      this.setState({
        leftButtonVisibility: "hidden",
        rightButtonVisibility: "visible",
      });
    } else if (
      this.state.pageSelected ===
      this.state.pagesAvailable.length - 1
    ) {
      this.setState({
        leftButtonVisibility: "visible",
        rightButtonVisibility: "hidden",
      });
    } else {
      this.setState({
        rightButtonVisibility: "visible",
        leftButtonVisibility: "visible",
      });
    }
  };

  goLeft = () => {
    this.setState((state) => {
      return { pageSelected: state.pageSelected - 1, x: state.x + 100 };
    }, this.showButtons);
  };
  goRight = () => {
    this.setState((state) => {
      return { pageSelected: state.pageSelected + 1, x: state.x - 100 };
    }, this.showButtons);
  };

  createNewPage = () => {
    this.setState(
      {
        pagesAvailable: [
          ...this.state.pagesAvailable,
          this.state.pagesAvailable.length,
        ],
        pages: [
          ...this.state.pages,
          {
            pageName: "empty",
            listedToDos: [],
          },
        ],
      },
      this.showButtons
    );
  };

  render() {
    return (
      <div
        className='app-wrapper'
        style={{
          backgroundImage: `linear-gradient(to bottom right, #${this.state.gradientOne}, #${this.state.gradientTwo})`,
        }}>
        <div
          className='app'
          style={{
            transform: `translateX(${this.state.x}%)`,
            transition: "transform 1s",
          }}>
          {this.state.pagesAvailable.map((item) => {
            return <Page key={item} {...this.state.pages[item]} />;
          })}
        </div>
        <div className='paddles'>
          <button
            className='paddle left-paddle'
            onClick={this.goLeft}
            style={{ visibility: this.state.leftButtonVisibility }}>
            {" < "}
          </button>
          <button className='newPageButton' onClick={this.createNewPage}>
            {" Create new Page "}
          </button>
          <button
            className='paddle right-paddle'
            onClick={this.goRight}
            style={{ visibility: this.state.rightButtonVisibility }}>
            {" > "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
