import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h3>HR-SHIHAB</h3>
      <div>
      <a href="/order">Order</a>
      <a href="/review">Order Review</a>
      <a href="/inventory">Manage Inventory</a>
      <a href="/login">Login</a>
      </div>
    
    </nav>
  );
};

export default Header;
