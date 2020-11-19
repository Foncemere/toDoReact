/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./css files/description.css";

class NestedToDo extends Component {
  state = { checked: false };

  callCheck = () => {
    this.setState({ crossed: !this.state.crossed });
  };

  render() {
    return (
      <div className='groupCheckbox'>
        <input type='checkbox' className='toDoCheck' onClick={this.callCheck} />
        <div
          id='nestedItem'
          key={this.props.item.key}
          style={{
            textDecoration: this.state.crossed ? "line-through" : "none",
            color: this.state.crossed ? "#eeeeee" : "#ffffff",
          }}>
          {this.props.item.item}
        </div>
      </div>
    );
  }
}

export default NestedToDo;
