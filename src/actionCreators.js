import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START_STOP,
  RESET_TIMER,
  DECREMENT_TIMELEFT,
  TIME_OVER,
} from './actionTypes';

export const incrementSession = () => ({
  type: INCREMENT_SESSION,
});
export const decrementSession = () => ({
  type: DECREMENT_SESSION,
});

export const incrementBreak = () => ({
  type: INCREMENT_BREAK,
});
export const decrementBreak = () => ({
  type: DECREMENT_BREAK,
});

export const startStop = () => ({
  type: START_STOP,
});
export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const decrementTimeLeft = () => ({
  type: DECREMENT_TIMELEFT,
});

export const timeOver = () => ({
  type: TIME_OVER,
});
