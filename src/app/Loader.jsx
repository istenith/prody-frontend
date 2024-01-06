// Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div
      className="loader-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: 'spin2 1.5s ease-in-out infinite, spin 2s linear infinite',
          animationDirection: 'alternate',
          transformOrigin: 'center',
          width: '100px', // Adjust the size as needed
          height: '100px', // Adjust the size as needed
          margin: 'auto',
          display: 'block',
        }}
      >
        <circle
          cx="400"
          cy="400"
          fill="none"
          r="200"
          strokeWidth="39"
          stroke="#E387FF"
          strokeDasharray="700 1400"
          strokeLinecap="round"
        />
      </svg>
      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes spin2 {
            0% {
              stroke-dasharray: 1, 800;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 400, 400;
              stroke-dashoffset: -200px;
            }
            100% {
              stroke-dasharray: 800, 1;
              stroke-dashoffset: -800px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
