import React, { Component } from "react";
import "./css files/app.css";
import Page from "./Page";
import pageNumber from "./toDoData.json";

class App extends Component {
  state = {
    pageSelected: 0,
  };

  render() {
    return (
      <div className='app-wrapper'>
        <div className='app'>
          <Page {...pageNumber[this.state.pageSelected]} />
          <Page {...pageNumber[1]} />
          <Page {...pageNumber[2]} />
          {/* put a display function instead of hard coding <Page/> maybe in state?*/}
        </div>
        <div className='paddles'>
          <button className='left-paddle paddle hidden' />
          <button className='right-paddle paddle' />
        </div>
      </div>
    );
  }
}

export default App;
