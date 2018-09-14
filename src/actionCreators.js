import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
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
