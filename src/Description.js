import React, { Component } from "react";
import "./css files/description.css";
import NestedToDo from "./NestedToDo";
import SvgComponentWhite from "./svg files/SvgAddWhite";

class Description extends Component {
  state = {
    pointerEvents: "none",
    descVisibility: false,
    descriptionProp: "",
    nested: false,
    nestedToDo: [],
    titleProp: "",
    readyAddNestedTask: "",
    holder: "",
    x: -360,
  };

  pressEnter = (e) => {
    if (e.key === "Enter") {
      this.handleNestedClick();
    }
  };

  handleDeleteCloseDescription = () => {
    this.setState({ descVisibility: false, x: -360, pointerEvents: "none" });
  };

  handleDescription = (prop) => {
    this.setState({
      titleProp: prop.taskName,
      descriptionProp: prop.description,
      nested: prop.nested,
      nestedToDo: prop.nestedToDo,
    });
    if (this.state.descVisibility && this.state.holder === prop.taskName) {
      this.setState({
        pointerEvents: "none",
        descVisibility: false,
        holder: prop.taskName,
        x: -360,
      });
    } else {
      this.setState({
        pointerEvents: "all",
        descVisibility: true,
        holder: prop.taskName,
        x: 0,
      });
    }
  };

  handleNestedClick = () => {
    const tempObject = this.state.readyAddNestedTask;
    const joined = this.state.nestedToDo.concat({
      item: tempObject,
      key: new Date().getTime(),
    });
    console.log(Object.values(this.state));
    if (this.state.readyAddNestedTask !== "") {
      this.setState({ nestedToDo: joined });
    }
    document.getElementsByClassName("nestedInput")[0].value = "";
  };

  render() {
    return (
      <div
        className={"description"}
        style={{
          pointerEvents: this.state.pointerEvents,
          transform: `translateX(${this.state.x}px)`,
          transition: "transform 1s",
        }}>
        <div style={{ paddingTop: "20px" }}>{this.state.titleProp}</div>
        <textarea
          className='descriptionProp'
          value={this.state.descriptionProp}
          onChange={(e) => {
            this.setState({ descriptionProp: e.target.value });
          }}
        />
        <div className='nestedInputForm'>
          <input
            className='nestedInput'
            onKeyDown={this.pressEnter}
            onChange={(e) =>
              this.setState({ readyAddNestedTask: e.target.value })
            }
            placeholder='Add new subtask.'
          />
          <SvgComponentWhite
            className='nestedAcceptButton'
            onClick={this.handleNestedClick}
          />
        </div>
        <div className='nestedList'>
          {this.state.nestedToDo.map((item) => (
            <NestedToDo item={item} key={item.key} />
          ))}
        </div>
      </div>
    );
  }
}

export default Description;
