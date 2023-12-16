import React, { useEffect, useState } from 'react';
import { NumberBox } from './NumBox';

interface TimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const fixedDate = new Date('January 19, 2024 00:00:00 GMT+0000').getTime();

export const TimerContainer = ({ days, hours, minutes, seconds }: TimeProps) => {
  const [countdownOver, setCountdownOver] = useState(false);

  // Convert values to numbers for comparison
  const numDays: number = typeof days === 'string' ? parseInt(days, 10) : Number(days);
  const numHours: number = typeof hours === 'string' ? parseInt(hours, 10) : Number(hours);
  const numMinutes: number = typeof minutes === 'string' ? parseInt(minutes, 10) : Number(minutes);
  const numSeconds: number = typeof seconds === 'string' ? parseInt(seconds, 10) : Number(seconds);

  // Calculate the time remaining
  const currentTime = new Date().getTime();
  const timeRemaining = fixedDate - currentTime;

  // Check if countdown is over
  useEffect(() => {
    if (timeRemaining <= 0) {
      setCountdownOver(true);
    }
  }, [timeRemaining]);

  // Update the countdown values
  let updatedDays: number | string = numDays;
  let updatedHours: number | string = numHours;
  let updatedMinutes: number | string = numMinutes;
  let updatedSeconds: number | string = numSeconds;

  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (!countdownOver) {
    if (numSeconds <= 0 && numMinutes <= 0 && numHours <= 0 && numDays <= 0) {
      daysFlip = false;
      hoursFlip = false;
      minutesFlip = false;
      secondsFlip = false;
    }

    if (numSeconds === 0) {
      if (numMinutes !== 0) {
        updatedSeconds = 59;
      }

      secondsFlip = false;
      minutesFlip = true;
    }
    if (numMinutes === 0) {
      if (numHours !== 0) {
        updatedMinutes = 59;
      }

      minutesFlip = false;
      hoursFlip = true;
    }

    if (numHours === 0) {
      hoursFlip = false;
      if (numDays !== 0) {
        daysFlip = true;
      }
    }

    if (numDays < 10) {
      updatedDays = '0' + numDays;
    }

    if (numHours < 10) {
      updatedHours = '0' + numHours;
    }

    if (numMinutes < 10) {
      updatedMinutes = '0' + numMinutes;
    }

    if (numSeconds < 10) {
      updatedSeconds = '0' + numSeconds;
    }
  }

  return (
    <div className="mt-2 md:mt-20 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
        {!countdownOver ? (
          <>
            <NumberBox num={updatedDays} unit="Days" flip={daysFlip} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedHours} unit="Hours" flip={hoursFlip} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedMinutes} unit="Minutes" flip={minutesFlip} />
            <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">:</span>
            <NumberBox num={updatedSeconds} unit="Seconds" flip={secondsFlip} />
          </>
        ) : (
          <p className="text-3xl text-white">We are in space!</p>
        )}
      </div>
    </div>
  );
};
