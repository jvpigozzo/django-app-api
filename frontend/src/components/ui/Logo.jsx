import React from "react";
import "../../styles/layout.css";

const Logo = () => {
  return (
    <div className="logo">
      <img src="./django.svg" alt="Logo" />
      <div className="logo-text">        
        <h1>Django App API</h1>
      </div>
    </div>
  );
};

export default Logo;
