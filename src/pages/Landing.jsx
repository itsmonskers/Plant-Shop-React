import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="company-name">Green Haven Plant Shop</h1>
        <p className="company-description">
          Welcome to Green Haven — your cozy corner for houseplants that bring
          calm, color, and life into your home.
        </p>
        <button className="get-started" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
