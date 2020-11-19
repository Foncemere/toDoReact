/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./css files/page.css";
import ToDoItem from "./ToDoItem";
import Description from "./Description";
import SvgComponent from "./svg files/SvgComponent";

class Page extends Component {
  //to access these states, use this.state.(word)
  state = {
    listedItems: this.props.listedToDos || [],
    readyAddTask: "",
    pageName: this.props.pageName,
  };
  descRef = React.createRef();

  //used to delete state.listedItems tasks
  deleteHandle = (id) => {
    const revisedListDelete = this.state.listedItems.filter(
      (x) => x.key !== id
    );
    this.setState({ listedItems: revisedListDelete });
  };

  display = () => {
    return this.state.listedItems.map((item) => (
      <ToDoItem
        key={item.key}
        item={item}
        descRef={this.descRef}
        delete={this.deleteHandle}
      />
    ));
  };

  handleClick = () => {
    //use arrow function, so you get a clear reference to this
    //generate new key, append a new <ToDoItem>
    const tempObject = {
      key: new Date().getTime(),
      taskName: this.state.readyAddTask,
      nestedToDo: [],
    };
    // NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation you made.
    const joined = this.state.listedItems.concat(tempObject);
    if (this.state.readyAddTask !== "") {
      this.setState({ listedItems: joined });
    }
    // this is how to get element, it has an array, apperently
    document.getElementsByClassName("newTaskInput")[0].value = "";
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
                this.props.onTitleChange(e.target.value, this.state.pageName);
              }}
            />
            <div className='toDoList'>{this.display()}</div>
            <div className='footer'>
              <SvgComponent
                className='submitNewTask'
                onClick={this.handleClick}
              />
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
          <Description ref={this.descRef} {...this.state.listedItems} />
        </div>
      </div>
    );
  }
}

export default Page;
