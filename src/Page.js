/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./css files/page.css";
import "./css files/description.css";
import ToDoItem from "./ToDoItem";

class Page extends Component {
  //to access these states, use this.state.(word)
  state = {
    listedItems: this.props.listedToDos || [],
    readyAddTask: "",
    visibility: "hidden",
    pointerEvents: "none",
    descVisibility: false,
    descriptionProp: "",
  };

  //used to delete state.listedItems tasks
  deleteHandle = (id) => {
    const revisedListDelete = this.state.listedItems.filter(
      (x) => x.key !== id
    );
    this.setState({ listedItems: revisedListDelete });
  };

  handleDescription = (prop) => {
    this.setState({ descriptionProp: prop.taskName });
    if (this.state.descVisibility) {
      this.setState({
        visibility: "hidden",
        pointerEvents: "none",
        descVisibility: false,
      });
    } else {
      this.setState({
        visibility: "visible",
        pointerEvents: "all",
        descVisibility: true,
      });
    }
  };

  display = () => {
    return this.state.listedItems.map((item) => (
      <ToDoItem
        key={item.key}
        item={item}
        delete={this.deleteHandle}
        handleDescription={this.handleDescription}
      />
    ));
  };

  handleClick = () => {
    //use arrow function, so you get a clear reference to this
    //generate new key, append a new <ToDoItem>
    const tempObject = {
      key: new Date().getTime(),
      taskName: this.state.readyAddTask,
      urgency: 0,
    };
    // NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation you made.
    const joined = this.state.listedItems.concat(tempObject);
    this.setState({ listedItems: joined });
  };

  render() {
    return (
      <div className='container'>
        <div className='page'>
          <div className='pageTitle'> {this.props.pageName} </div>
          <div className='toDoList'>{this.display()}</div>
          <div className='footer'>
            <div className='submitNewTask' onClick={this.handleClick}>
              +
            </div>
            <input
              className='newTaskInput'
              onChange={(e) => this.setState({ readyAddTask: e.target.value })}
              placeholder='Add new task.'
            />
          </div>
        </div>
        <div
          className={"description"}
          style={{
            visibility: this.state.visibility,
            pointerEvents: this.state.pointerEvents,
          }}>
          <div>{this.state.descriptionProp}</div>
        </div>
      </div>
    );
  }
}

export default Page;
