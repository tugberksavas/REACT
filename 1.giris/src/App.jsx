import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //Jsx : {}
  //Javascript kodlari yazilir.
  let a = 15;
  const firstName = "Tugberk";

  let vize1 = 60;
  let vize2 = 80;
  let final = 90;

  let sonuc = true;

  let isimler = ["Enes", "Aysenur", "Kubra", "Adem"];

  return (
    //html kodlari yaziyoruz.
    <div>
      {/* <p>a degiskenin deger : {a} </p> */}
      {/* <p>Musterinin Adi : {firstName} </p> */}
      {/* <p>Ortalama : {(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsin , kaybol</p>} */}

      {/* {(vize1 * 0.3 + vize2 * 0.3 + final * 0.8) / 2 >= 50 ? (
        <p>Dersten Gectin</p>
      ) : (
        <p>Dersten kaldin</p>
      )} */}

      {isimler.map((isim, index) => (
        <div
          style={{
            background: "orange",
            border: "1px solid black",
            padding: "10px",
            // display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
          }}
          key={index}
        >
          {" "}
          {isim}{" "}
        </div>
      ))}
    </div>
  );
}

export default App;
