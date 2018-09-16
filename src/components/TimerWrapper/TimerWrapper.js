import React from 'react';
import PropTypes from 'prop-types';
import './TimerWrapper.css';
import Timer from '../Timer/Timer';
import TimerControls from '../TimerControls/TimerControls';

const TimerWrapper = ({
  paused,
  timerLabel,
  timeLeft,
  startStop,
  resetTimer,
}) => {
  return (
    <section id="timer-wrapper">
      <Timer timerLabel={timerLabel} timeLeft={timeLeft} />
      <TimerControls
        paused={paused}
        startStop={startStop}
        resetTimer={resetTimer}
      />
    </section>
  );
};

TimerWrapper.propTypes = {
  paused: PropTypes.bool,
  timerLabel: PropTypes.string,
  timeLeft: PropTypes.string,
  startStop: PropTypes.func,
  resetTimer: PropTypes.func,
};

export default TimerWrapper;
