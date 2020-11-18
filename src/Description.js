import React, { Component } from "react";
import "./css files/description.css";
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
    const joined = this.state.nestedToDo.concat(tempObject);
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
            // change to a checkbox
            // eslint-disable-next-line react/jsx-key
            <div id='nestedItem'> {item} </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Description;
