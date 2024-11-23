import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <div className="header">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/about">Hakkinda</Link>
      <Link className="link" to="/products">Urunlerimiz</Link>
      <Link className="link" to="/contact">Iletisim</Link>
    </div>
  );
}

export default Header;
