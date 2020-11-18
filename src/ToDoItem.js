import React from "react";
import "./css files/toDoItem.css";
import SvgDelete from "./svg files/SvgDelete";
import SvgMenu from "./svg files/SvgMenu";

function ToDoItem(prop) {
  return (
    <div className='toDoItem'>
      <input type='checkbox' className='toDoCheck' />
      {prop.item.taskName}
      <SvgDelete
        className='indivMenu del'
        onClick={() => prop.delete(prop.item.key)}
      />
      <SvgMenu
        className='indivMenu desc'
        onClick={() => prop.descRef.current?.handleDescription?.(prop.item)}
      />
    </div>
  );
}
export default ToDoItem;
