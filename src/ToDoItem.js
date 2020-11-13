import React from "react";
import "./css files/toDoItem.css";

function ToDoItem(prop) {
  return (
    <div className='toDoItem'>
      <input type='checkbox' className='toDoCheck' />
      {prop.item.taskName}
      <span className='indivMenu' onClick={() => prop.delete(prop.item.key)}>
        {" "}
        M{" "}
      </span>
      <span
        className='indivMenu'
        onClick={() => prop.handleDescription(prop.item)}>
        {" "}
        D{" "}
      </span>
    </div>
  );
}
export default ToDoItem;
