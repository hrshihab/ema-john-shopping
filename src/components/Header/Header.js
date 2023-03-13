import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h3>HR-SHIHAB</h3>
      <div>
      <Link to='/home'>Home</Link>
      <Link to="/order">Order</Link>
      <Link to="/review">Order Review</Link>
      <Link to="/inventory">Manage Inventory</Link>
      <Link to="/login">Login</Link>
      
      </div>
    
    </nav>
  );
};

export default Header;
