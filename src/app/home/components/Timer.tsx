import React, { useEffect, useState } from 'react';
import NumberBox from './NumberBox';

interface TimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const fixedDate = new Date('January 19, 2024 00:00:00 GMT+0000').getTime();

 const TimerContainer = ({ days, hours, minutes, seconds }: TimeProps) => {
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
      <a href="www.google.com" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad"><stop stop-color="hsl(206, 75%, 49%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(331, 90%, 56%)" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g stroke="url(#cccoil-grad)" fill="none" stroke-linecap="round"><circle r="408" cx="400" cy="400" stroke-width="10" stroke-dasharray="0 2564" opacity="0.10"></circle><circle r="391" cx="400" cy="400" stroke-width="10" stroke-dasharray="91 2457" transform="rotate(16, 400, 400)" opacity="0.26"></circle><circle r="374" cx="400" cy="400" stroke-width="10" stroke-dasharray="174 2350" transform="rotate(31, 400, 400)" opacity="0.89"></circle><circle r="357" cx="400" cy="400" stroke-width="10" stroke-dasharray="249 2243" transform="rotate(47, 400, 400)" opacity="0.91"></circle><circle r="340" cx="400" cy="400" stroke-width="10" stroke-dasharray="316 2136" transform="rotate(63, 400, 400)" opacity="0.68"></circle><circle r="323" cx="400" cy="400" stroke-width="10" stroke-dasharray="375 2029" transform="rotate(78, 400, 400)" opacity="0.47"></circle><circle r="306" cx="400" cy="400" stroke-width="10" stroke-dasharray="426 1923" transform="rotate(94, 400, 400)" opacity="0.64"></circle><circle r="289" cx="400" cy="400" stroke-width="10" stroke-dasharray="470 1816" transform="rotate(110, 400, 400)" opacity="0.96"></circle><circle r="272" cx="400" cy="400" stroke-width="10" stroke-dasharray="505 1709" transform="rotate(125, 400, 400)" opacity="0.59"></circle><circle r="255" cx="400" cy="400" stroke-width="10" stroke-dasharray="533 1602" transform="rotate(141, 400, 400)" opacity="0.50"></circle><circle r="238" cx="400" cy="400" stroke-width="10" stroke-dasharray="553 1495" transform="rotate(157, 400, 400)" opacity="0.45"></circle><circle r="221" cx="400" cy="400" stroke-width="10" stroke-dasharray="564 1389" transform="rotate(172, 400, 400)" opacity="0.22"></circle><circle r="204" cx="400" cy="400" stroke-width="10" stroke-dasharray="568 1282" transform="rotate(188, 400, 400)" opacity="0.65"></circle><circle r="187" cx="400" cy="400" stroke-width="10" stroke-dasharray="564 1175" transform="rotate(203, 400, 400)" opacity="0.94"></circle><circle r="170" cx="400" cy="400" stroke-width="10" stroke-dasharray="553 1068" transform="rotate(219, 400, 400)" opacity="0.79"></circle><circle r="153" cx="400" cy="400" stroke-width="10" stroke-dasharray="533 961" transform="rotate(235, 400, 400)" opacity="0.95"></circle><circle r="136" cx="400" cy="400" stroke-width="10" stroke-dasharray="505 855" transform="rotate(250, 400, 400)" opacity="0.88"></circle><circle r="119" cx="400" cy="400" stroke-width="10" stroke-dasharray="470 748" transform="rotate(266, 400, 400)" opacity="0.28"></circle><circle r="102" cx="400" cy="400" stroke-width="10" stroke-dasharray="426 641" transform="rotate(282, 400, 400)" opacity="0.64"></circle><circle r="85" cx="400" cy="400" stroke-width="10" stroke-dasharray="375 534" transform="rotate(297, 400, 400)" opacity="0.78"></circle><circle r="68" cx="400" cy="400" stroke-width="10" stroke-dasharray="316 427" transform="rotate(313, 400, 400)" opacity="0.31"></circle><circle r="51" cx="400" cy="400" stroke-width="10" stroke-dasharray="249 320" transform="rotate(329, 400, 400)" opacity="0.70"></circle><circle r="34" cx="400" cy="400" stroke-width="10" stroke-dasharray="174 214" transform="rotate(344, 400, 400)" opacity="0.51"></circle><circle r="17" cx="400" cy="400" stroke-width="10" stroke-dasharray="91 107" transform="rotate(360, 400, 400)" opacity="0.71"></circle></g></svg>
        </a>
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

export default TimerContainer