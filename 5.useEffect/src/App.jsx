import { useEffect, useState } from "react";

import "./App.css";

// useEffect bir sayfa yuklendiginde bir seyler yaptırmak istiyorsak useEffect kullaniriz.
// callback fonksiyon bir fonkiyonun bir fonksiyona parametre olarak gecmeye callback fonksyon denir

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman calisir");
  });

  useEffect(() => {
    console.log("ilk render edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve FIRSTNAME state degeri degistiginde calisir."
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve LASTNAME state degeri degistiginde calisir."
    );
  }, [lastName]);

  return (
    <>
      <div>
        <button onClick={() => setFirstName("Tugberk")}>Adi Degistir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Savas")}>Soyisim Degistir</button>
      </div>
    </>
  );
}

export default App;
