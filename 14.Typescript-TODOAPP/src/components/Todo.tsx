import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false); // editable state

  const [newTodo, setNewTodo] = useState<string>(content); // new todo state

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "15px", // Add some padding
        marginTop: "25px",
        borderRadius: "5px",
      }}
    >
      {/* <div> {content} </div> */}
      {editable ? (
        <input
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
          }}
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div> {content} </div>
      )}
      <div>
        <IoIosRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />
        {editable ? (
          <FaCheck onClick={handleUpdateTodo} className="icons" />
        ) : (
          <FaRegEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
