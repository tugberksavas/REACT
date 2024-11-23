import { useState } from "react";

import "./App.css";
import Login from "./Login";
import { users } from "./Login";
import Hello from "./Hello";

function App() {
  // console.log(users);
  return (
    <div>
      {/* <Login /> */}
      <Hello />
    </div>
  );
}

// bir componenti oldugu gibi disariya vermek istiyorsak export defult kullanmaliyiz ama bir componentin icinden bir parca seyi export ediceksek export kullaniriz.

export default App;
