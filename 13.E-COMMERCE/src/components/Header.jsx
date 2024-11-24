import React, { useState } from "react";
import "../css/Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa6";

function Header() {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" src="./src/images/logo.png" alt="" />
        <p className="logo-p">TUGBERK A.Ş</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          placeholder="Birseyler Ara"
        />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}

          <FaShoppingBasket className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
