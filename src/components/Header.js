import React from "react";
import '../style/header.css'
import logo from '../resources/logo.png'
import cart from '../resources/shopping.png';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} />
      <nav className="header-nav">
      <ul className="nav-element">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      </nav>
       <Link to="/"> <img className="cart-icon" src={cart}></img></Link>
    </div>
  );
};

export default Header;
