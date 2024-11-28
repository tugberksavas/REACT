import React, { useState } from "react";
import "../css/Auth.css";
import { FaGoogle } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    try {
      const responce = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(responce);
      const token = credential.accessToken;
      const user = responce.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const login = async () => {
    try {
      const responce = await signInWithEmailAndPassword(auth, email, password);
      const user = responce.user;
      if (user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Giris Yapilamadi." + error.message);
    }
  };

  const register = async () => {
    try {
      const responce = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); // Create a new user
      const user = responce.user;
      if (user) {
        toast.success("Kullanici Olusturuldu.");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="auth">
      <h3 className="auth-header">Giris Yap / Kayit Ol</h3>
      <div className="auth-form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-from-email"
          type="text"
          placeholder="Email Adress"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-from-password"
          type="password"
          placeholder="Sifre"
        />
      </div>
      <div className="auth-button-div">
        <button onClick={loginWithGoogle} className="google-login">
          <FaGoogle />
          oogle İle Giris Yap
        </button>
        <button onClick={login} className="giris-yap-button">
          Giris Yap
        </button>
        <button onClick={register} className="kaydol-button">
          Kaydol
        </button>
      </div>
    </div>
  );
}

export default Auth;
