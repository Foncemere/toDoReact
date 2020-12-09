import React, { useState } from "react";
import "./css files/toDoItem.css";
import SvgDelete from "./svg files/SvgDelete";
import SvgMenu from "./svg files/SvgMenu";

function ToDoItem(prop) {
  // Need to use hooks as variables wont act like states, since rerendering is needed
  let [crossed, setCrossed] = useState(false);

  function callCheck() {
    setCrossed(!crossed);
  }

  function callDelete() {
    prop.delete(prop.item.key);
    prop.descRef.current.handleDeleteCloseDescription();
  }

  return (
    <div className='toDoItem'>
      <input type='checkbox' className='toDoCheck' onClick={callCheck} />
      <div
        className='toDo'
        style={{
          textDecoration: crossed ? "line-through" : "none",
          color: crossed ? "#999999" : "#000000",
        }}>
        {prop.item.taskName}
      </div>
      <SvgDelete className='indivMenu del' onClick={callDelete} />
      <SvgMenu
        className='indivMenu desc'
        onClick={() => prop.descRef.current?.handleDescription?.(prop.item)}
      />
    </div>
  );
}
export default ToDoItem;
