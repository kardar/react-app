import React from "react";
import '../style/leftNavBar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LeftNavBar = () => {
  return (
    <div className="leftNav-container">
     <div className="dropdown">
       <button className="dropbtn">CatogriesCatogries    </button>
       <div className="dropdown-content">
       <a href="#">Vegatables</a>
       <a href="#">Meat</a>
      <a href="#">Fruits</a>
      <a href="#">Groceries</a>
       </div>
     </div>
      <div className="search-container">
      <input className="search-bar" type="text" placeholder="What do you need?"></input>
      <button className="search-btn" type="submit">Search</button>
      </div>
    </div>
  );
};
export default LeftNavBar;