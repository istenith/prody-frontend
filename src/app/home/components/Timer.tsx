// Timer.tsx

import React, { useEffect, useState } from 'react';
import NumberBox from './NumberBox';  

interface TimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const targetDate = new Date('April 5, 2024 00:00:00 GMT+0000').getTime();

const TimerContainer = ({ days, hours, minutes, seconds }: TimeProps) => {
  const [countdownOver, setCountdownOver] = useState(false);

  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    return Math.max(targetDate - currentTime, 0);
  };

  const formatTimeUnit = (value: number) => (value < 10 ? `0${value}` : value.toString()); // Convert value to string

  const updateCountdown = () => {
    const timeRemaining = calculateTimeRemaining();
    setCountdownOver(timeRemaining === 0);
  };

  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const timeRemaining = calculateTimeRemaining();

  const updatedDays = formatTimeUnit(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  const updatedHours = formatTimeUnit(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const updatedMinutes = formatTimeUnit(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
  const updatedSeconds = formatTimeUnit(Math.floor((timeRemaining % (1000 * 60)) / 1000));

  return (
    <div className="mt-2 md:mt-20 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8 " style={{marginTop:-170}} > 
        {!countdownOver ? (
          <>
            {/* Use the NumberBox component */}
            <NumberBox num={updatedDays} unit="Days" flip={false} countdownOver={countdownOver} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedHours} unit="Hours" flip={false} countdownOver={countdownOver} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedMinutes} unit="Minutes" flip={false} countdownOver={countdownOver} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedSeconds} unit="Seconds" flip={true} countdownOver={countdownOver} />
          </>
        ) : (
          <p
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              backgroundColor: '#000000',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              margin: '10px 0',
            }}
            className={countdownOver ? 'countdown-over' : ''}
          >
            {`Prodyogiki'24 is LIVE now! Check out the events page`}
          </p>
        )}
      </div>
    </div>
  );
};

export default TimerContainer;
