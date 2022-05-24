import React from "react";
import "../style/top.css";
import facebook from '../resources/facebook.png'
import twitter from '../resources/twitter.png'
import indin from '../resources/in.png'
import login from '../resources/login.png';

const Top = () => {
  return (
    <div className="top-container">
      <h4 className="display-mail">User@gmail.com</h4>

      <h4 className="free-shipping"> Free shipping for all Order of $99</h4>
        
      <div className="icon-container">
        <img className="facebook-top" src={facebook}/>
      <img className="twitter-top" src={twitter} />
      <img className="indin-top" src={indin} /></div>
        
       
       <div className="login-container">
     <a href="#"> <img className="login-top" src={login} /></a>
      <h4 className="login-text">login</h4>
      </div>
    
    </div>
  );
};

export default Top;
