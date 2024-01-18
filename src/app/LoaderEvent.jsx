import React from 'react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize:"30px" }}>
      <div className="rocket" style={{ fontSize: '40px' }}>🚀</div>
      Loading<span style={{ fontSize: '50px' }} className="dots">
        <span>.</span><span>.</span><span>.</span>
      </span>
      <style>
        {`
          .dots span {
            animation: blink 1.4s infinite both;
          }
          .dots span:nth-child(2) {
            animation-delay: 0.2s;
          }
          .dots span:nth-child(3) {
            animation-delay: 0.4s;
          }
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .rocket {
            animation: fly 2s infinite linear;
          }
          @keyframes fly {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
