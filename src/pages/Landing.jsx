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
          Welcome to Green Haven, your one-stop destination for bringing nature closer to your home. We believe that plants do more than just decorate spaces—they breathe life into them. Our mission is to make plant care simple, joyful, and accessible to everyone, whether you’re a seasoned plant lover or just starting your green journey. Each of our houseplants is carefully handpicked and nurtured to ensure it arrives at your doorstep healthy, vibrant, and ready to thrive.
        </p>
        <button className="get-started" onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Landing;
