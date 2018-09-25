import React from 'react';
import PropTypes from 'prop-types';
import './TimerControls.css';

const TimerControls = ({ paused, startStop, resetTimer }) => {
  // reset function is just added to pass a fcc test otherwise it is unnecessary
  // test faild because I used state to control the audio
  // const reset = () => {
  //   resetTimer();
  //   const audio = document.getElementById('beep');
  //   audio.pause();
  //   audio.currentTime = 0;
  // };

  const playPauseIcon = paused ? (
    <svg viewBox="0 0 24 24">
      <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24">
      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
    </svg>
  );

  return (
    <section id="timer-controls">
      <button id="start_stop" onClick={startStop}>
        {playPauseIcon}
      </button>

      <button id="reset" onClick={resetTimer}>
        <svg viewBox="0 0 24 24">
          <path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3M12,8V13L16.28,15.54L17,14.33L13.5,12.25V8H12Z" />
        </svg>
      </button>
    </section>
  );
};

TimerControls.propTypes = {
  paused: PropTypes.bool,
  startStop: PropTypes.func,
  resetTimer: PropTypes.func,
};

export default TimerControls;
