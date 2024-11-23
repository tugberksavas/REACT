import React from "react";

export const users = [
  {
    userName: "tugberk",
    password: "1",
  },
  {
    userName: "aysenur",
    password: "2",
  },
];

function Login() {
  //Fragment
  return (
    <>
      <div>
        <div>
          <p>Kullanici Adiniz</p>
          <input type="text" />
        </div>
        <div>
          <p>Parolaniz</p>
          <input type="password" />
        </div>
        <div>
          <button>Giris Yap</button>
        </div>
      </div>
    </>
  );
}

export default Login;
