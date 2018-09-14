import React from 'react';
import './TimerWrapper.css';
import Timer from '../Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

const TimerWrapper = () => {
  return (
    <section id="timer-wrapper">
      <Timer />
      <TimerControls />
    </section>
  );
};

export default TimerWrapper;
