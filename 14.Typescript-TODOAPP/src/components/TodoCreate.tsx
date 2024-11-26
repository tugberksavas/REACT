import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreatTodo = () => {
    if (newTodo.trim().length === 0) {
      alert("todo giriniz");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        placeholder="Todo Giriniz...."
        className="todocreate-input"
        type="text"
      />
      <button onClick={handleCreatTodo} className="todocreate-button">
        Olustur
      </button>
    </div>
  );
}

export default TodoCreate;
