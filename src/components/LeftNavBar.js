import React from "react";
import '../style/leftNavBar.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LeftNavBar = () => {
  return (
    <div className="leftNav-container">
    <nav className="leftnav-bar">
      <h1 ><button className="btn-departments">All Departments</button></h1>
      <ul>
        <li>Fruit</li>
        <li>Fruit</li>
        <li>Fruit</li>
        <li>Fruit</li>
      </ul>
      </nav>
      <div className="search-container">
      <input className="search-bar" type="text" placeholder="What do you need?"></input>
      <button className="search-btn" type="submit">Search</button>
      </div>
    </div>
  );
};
export default LeftNavBar;
