import React from 'react';
import './TimerWrapper.css';
import Timer from '../Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

const TimerWrapper = ({
  paused,
  timerLabel,
  timeLeft,
  startStop,
  resetTimer,
  decrementTimeLeft,
}) => {
  return (
    <section id="timer-wrapper">
      <Timer
        paused={paused}
        timerLabel={timerLabel}
        timeLeft={timeLeft}
        decrementTimeLeft={decrementTimeLeft}
      />
      <TimerControls
        paused={paused}
        startStop={startStop}
        resetTimer={resetTimer}
      />
    </section>
  );
};

export default TimerWrapper;
