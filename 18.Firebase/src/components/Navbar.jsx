import React from "react";
import "../css/Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const logout = async () => {
    toast.success("Cikis Yapiliyor.");
    setTimeout(() => {
      signOut(auth);
      navigate("/auth");
    }, 2000);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">FireBase</div>
      <div onClick={logout} className="navbar-right">
        Cikis Yap
      </div>
    </div>
  );
}

export default Navbar;
