import React from "react";
import "../styles/IntroPage.css";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <header className="header">
        <h1 style={{fontSize:'5vw'}}>Welcome to Colab Code</h1>
      </header>

      <div className="buttons">
        <button className="start-btn">Start Coding</button>
        <button className="register-btn" onClick={()=>navigate('/register')}>Register</button>
      </div>
    </div>
  );
};

export default IntroPage;
