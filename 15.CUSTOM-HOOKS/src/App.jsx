import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
  const { count, increase, descrease } = useCounter();
  const { open, change } = useToggle();
  const [copied, copy] = useCopyToClipboard("pes etme calis");
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Arttir</button>
      <button onClick={descrease}>Azalt</button>
      <hr />
      <hr />
      <div>
        {open && (
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "red" }}
          >
            Kutu
          </div>
        )}

        <button onClick={change}> {open ? "Gizle" : "Goster"} </button>
      </div>
      <hr />
      <hr />
      <div>
        {copied && "kopyalandi"}
        <button onClick={copy}>Kopyala </button>
      </div>
    </div>
  );
}
export default App;
