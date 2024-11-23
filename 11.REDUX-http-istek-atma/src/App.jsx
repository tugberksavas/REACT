import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./UserList";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      <p>tugberk</p>
      <div>
        <h2>{value}</h2>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
      <h2>User Listesi</h2>
      <div>
        <UserList />
      </div>
    </div>
  );
}

export default App;
