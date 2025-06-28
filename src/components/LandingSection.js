import React from 'react';
import './LandingSection.css';
import { useNavigate } from 'react-router-dom';

export default function LandingSection() {
    const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1>facebook</h1>
        <p>Facebook helps you connect and share<br />with the people in your life.</p>
      </div>
      <div className="landing-right">
        <div className="login-card">
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button className="login-btn">Log In</button>
          <button className="forgot-btn" onClick={() => alert("Reset link sent!")}>
          Forgotten password?
          </button>

         <div className="divider"></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="create-btn">Create New Account</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className="create-btn" onClick={() => navigate('/dashboard')}>
           Go to Dashboard
        </button>
        </div>
        </div>
        <p className="bottom-note"><strong>Create a Page</strong> for a celebrity, brand or business.</p>
      </div>
    </div>
  );
}
