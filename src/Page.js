/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./css files/page.css";
import "./css files/description.css";
import ToDoItem from "./ToDoItem";
// import Description from "./Description";

class Page extends Component {
  //to access these states, use this.state.(word)
  state = {
    listedItems: this.props.listedToDos || [],
    readyAddTask: "",
    visibility: "hidden",
    descVisibility: false,
    titleProp: "",
    descriptionProp: "",
    nested: true,
    nestedToDo: [],
    pageName: this.props.pageName,
  };

  //used to delete state.listedItems tasks
  deleteHandle = (id) => {
    const revisedListDelete = this.state.listedItems.filter(
      (x) => x.key !== id
    );
    this.setState({ listedItems: revisedListDelete });
  };

  handleDescription = (prop) => {
    this.setState({
      titleProp: prop.taskName,
      descriptionProp: prop.description,
      nested: prop.nested,
      nestedToDo: prop.nestedToDo,
    });
    if (this.state.descVisibility) {
      this.setState({
        visibility: "hidden",
        // pointerEvents: "none",
        descVisibility: false,
      });
    } else {
      this.setState({
        visibility: "visible",
        // pointerEvents: "all",
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
      <div className='parentContainer'>
        <div className='container'>
          <div className='page'>
            <input
              className='pageTitle'
              value={this.state.pageName}
              onChange={(e) => {
                this.setState({ pageName: e.target.value });
              }}
            />
            <div className='toDoList'>{this.display()}</div>
            <div className='footer'>
              <div className='submitNewTask' onClick={this.handleClick}>
                +
              </div>
              <input
                className='newTaskInput'
                onChange={(e) =>
                  this.setState({ readyAddTask: e.target.value })
                }
                placeholder='Add new task.'
              />
            </div>
          </div>
          {/* description code here */}
          <div
            className={"description"}
            style={{
              visibility: this.state.visibility,
              // pointerEvents: this.state.pointerEvents,
            }}>
            <div>{this.state.titleProp}</div>
            <textarea
              className='descriptionprop'
              value={this.state.descriptionProp}
              onChange={(e) => {
                this.setState({ descriptionProp: e.target.value });
              }}
            />
            <div className={"nested"}>
              {this.state.nested
                ? this.state.nestedToDo
                : "nothing is hereeeee"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
