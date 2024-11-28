import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

function Home() {
  const [user, setUser] = useState(null);

  const getUserInfo = () => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        console.log(userCredential);
        setUser(userCredential.email);
      }
    });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div style={{ margin: "10px", fontSize: "25px" }}>Merhaba {user} </div>
  );
}

export default Home;
