import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);
  console.log(value);

  return (
    <div>
      <p>tugberk </p>
      <div> {value} </div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttir</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
