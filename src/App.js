import React, { Component } from "react";
import "./css files/app.css";
import Page from "./Page";
import pageNumber from "./toDoData.json";

class App extends Component {
  state = {
    pageSelected: [0, 1],
    x: 0,
    pages: pageNumber,
  };

  goLeft = () => {
    console.log(this.state.pages);
    this.setState({ x: this.state.x + 100 });
  };
  goRight = () => {
    this.setState({ x: this.state.x - 100 });
  };

  createNewPage = () => {
    this.setState({
      pageSelected: [
        ...this.state.pageSelected,
        this.state.pageSelected.length,
      ],
      pages: [...this.state.pages, { pageName: "empty", listedToDos: [] }],
    });
  };

  render() {
    return (
      <div className='app-wrapper'>
        <div
          className='app'
          style={{ transform: `translateX(${this.state.x}%)` }}>
          {this.state.pageSelected.map((item) => {
            return <Page key={item} {...this.state.pages[item]} />;
          })}
        </div>
        <button className='newPageButton' onClick={this.createNewPage}>
          {" Create new Page "}
        </button>
        <div className='paddles'>
          <button className='left-paddle paddle' onClick={this.goLeft}>
            {" Left "}
          </button>
          <button className='right-paddle paddle' onClick={this.goRight}>
            {" Right "}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
