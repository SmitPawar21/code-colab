import React, { useState } from 'react';
import "../styles/Register.css";
import email from "../assets/email.svg";
import password from "../assets/password.svg";
import eye from "../assets/eye.svg";

const LoginPage = () => {

  const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    console.log(formData);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  

  return (
    <div className='login-page' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <div className='container' style={{height:'70%'}}>

        <h1>Login to your account</h1>

        <div className='inner-box' style={{height:'50% !important'}}>
          <div className='input-box'>

            <div className='single-input'>
              <img src={email} alt="image hai" />
              <input type='email' placeholder='Email' className='email-input' onChange={handleChange} />
            </div>

            <div className='single-input'>
              <img src={password} alt="image hai" />
              <input type='password' placeholder='Password' className='password-input' onChange={handleChange} />
              <img src={eye} alt="image hai" />
            </div>

            <div className='button-box' style={{marginTop:'5vh'}}>
              <button className='login-button'>Login</button>
              <p style={{color:'var(--accent-color'}}>Don't Have Account ? <a href="/dashboard" style={{color:'var(--primary-color)'}}>Sign Up</a> </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage;
