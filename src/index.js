import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css files/app.css";
import Page from "./Page";
import pageNumber from "./toDoData.json";
import "./css files/index.css";
import "./css files/mainMenu.css";

class App extends Component {
  state = {
    pagesAvailable: [0, 1],
    pageSelected: 0,
    x: 0,
    pages: pageNumber,
    rightButtonVisibility: "visible",
    leftButtonVisibility: "hidden",
    gradientOne: "80ced7",
    gradientTwo: "007EA7",
  };

  showButtons = () => {
    if (this.state.x === 0) {
      this.setState({
        leftButtonVisibility: "hidden",
        rightButtonVisibility: "visible",
      });
    } else if (this.state.x === (this.state.pagesAvailable.length - 1) * -100) {
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
            key: new Date().getTime(),
          },
        ],
      },
      this.showButtons
    );
  };

  selectedColor = (a, b) => {
    this.setState({
      gradientOne: a,
      gradientTwo: b,
    });
  };

  handleTitleChange = (titleChanged, originalTitle) => {
    const updatedArray = this.state.pages.map((item) => {
      let temp = Object.assign({}, item);
      console.log(originalTitle);
      if (temp.key === originalTitle) {
        temp.pageName = titleChanged;
      }
      return temp;
    });
    this.setState({ pages: updatedArray });
  };

  render() {
    return (
      // ideally the parent is the single source of truth, next time
      <div className='grid-container'>
        <div className='menu'>
          <p>
            <span style={{ fontWeight: "bold" }}>A Typical</span> To Do List
          </p>
          <hr />
          <div className='parentList'>
            <div className='listOfPages'>
              {this.state.pages.map((item, index) => {
                return (
                  <div
                    className='pageElement'
                    onClick={() =>
                      this.setState({ x: index * -100 }, this.showButtons)
                    }
                    key={item.key}>
                    {item.pageName}
                  </div>
                );
              })}
              {}
            </div>
          </div>
          <hr />
          <div className='swatches'>
            <div
              className='swatch one'
              onClick={() => this.selectedColor("80ced7", "007EA7")}>
              {"CALM"}
            </div>
            <div
              className='swatch two'
              onClick={() => this.selectedColor("67B26F", "4ca2cd")}>
              {"FOREST"}
            </div>
            <div
              className='swatch three'
              onClick={() => this.selectedColor("7be2a4", "faca59")}>
              {"LIFE"}
            </div>
            <br />
            <div
              className='swatch four'
              onClick={() => this.selectedColor("7b4397", "dc4024")}>
              {"DAWN"}
            </div>
            <div
              className='swatch five'
              onClick={() => this.selectedColor("654ea3", "eaafc8")}>
              {"AROMA"}
            </div>
            <div
              className='swatch six'
              onClick={() => this.selectedColor("E58C8A", "f3d2d6")}>
              {"RADIANT"}
            </div>
            <br />
            <div
              className='swatch seven'
              onClick={() => this.selectedColor("870000", "190A05")}>
              {"KIN"}
            </div>
            <div
              className='swatch eight'
              onClick={() => this.selectedColor("380036", "0CBABA")}>
              {"ASTRAL"}
            </div>
            <div
              className='swatch nine'
              onClick={() => this.selectedColor("2c3e50", "bdc3c7")}>
              {"MOON"}
            </div>
            <br />
            <div
              className='swatch ten'
              onClick={() => this.selectedColor("6d0101", "fe5b5b")}>
              {"DEVIL"}
            </div>
            <div
              className='swatch eleven'
              onClick={() => this.selectedColor("C9FFBF", "FFAFBD")}>
              {"COCO"}
            </div>
            <div
              className='swatch twelve'
              onClick={() => this.selectedColor("1f4037", "99f2c8")}>
              {"JADE"}
            </div>
            <hr />
          </div>
        </div>
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
              return (
                <Page
                  key={this.state.pages[item].key}
                  pageKey={this.state.pages[item].key}
                  {...this.state.pages[item]}
                  onTitleChange={this.handleTitleChange}
                />
              );
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
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
