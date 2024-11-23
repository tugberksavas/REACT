import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function Todo({ todo, tugberk ,onUpdateTodo}) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);

  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    tugberk(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    }
    onUpdateTodo(request)
    setEditable(false)
  } 

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        marginTop: "4px",
        // padding:"10px"
      }}
    >
      <div>
        {editable ? <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value) } 
        style={{width:"380px"}}
        className="todo-input" type="text" /> : content}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaRegEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
