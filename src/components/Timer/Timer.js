import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css';

const Timer = ({ timerLabel, timeLeft }) => {
  return (
    <section id="timer">
      <span id="timer-label">{timerLabel}</span>
      <span id="time-left">{timeLeft}</span>
    </section>
  );
};

Timer.propTypes = {
  paused: PropTypes.bool,
  timerLabel: PropTypes.string,
  timeLeft: PropTypes.string,
  decrementTimeLeft: PropTypes.func,
};

export default Timer;
