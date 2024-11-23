import { useState } from "react";
import "./App.css";

function App() {
  // string tckn = "12345678901"
  // string firstName = "Tugberk"

  // useState : hooks

  // useState : bir statin degerini set metodu kullanarak degistirdiginde compopnent yeniden render edilir
  const [count, setCount] = useState(0);

  const [firstName, setFirstName] = useState("Tugberk");
  const [lastName, setLastName] = useState("Savas");
  const [names, setNames] = useState(["Enes", "Adem", "Yakup", "Ali"]);
  const [userInfo, setuserInfo] = useState({
    userName: "etugberk",
    password: "1212",
  });
  const [show, setShow] = useState(false);

  console.log(names);

  const handleChane = () => {
    setFirstName("Aysenur"), setLastName("Kose");
  };

  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  console.log("component render edildi");

  return (
    <>
      <div>
        <div> {count} </div>
        <button onClick={arttir}>Arttir</button>
        <button onClick={azalt}>Azalt</button>
      </div>
      <hr />
      <div>
        <div>
          {firstName} {lastName}
        </div>
        <hr />
        <div>
          <button onClick={handleChane}>Ismi Degistir</button>
        </div>
      </div>
      <hr />
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <hr />
      <div>
        {show ? (
          <div>
            {" "}
            {userInfo.userName} {userInfo.password}{" "}
          </div>
        ) : (
          "bilgileri gosterme"
        )}
      </div>
    </>
  );
}

export default App;
