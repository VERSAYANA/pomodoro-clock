import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  START_STOP,
  RESET_TIMER,
} from './actionTypes';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  paused: true,
  timerLabel: 'Session',
  timeLeft: 1500,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
      };
    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
      };

    case INCREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength + 1,
      };
    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength - 1,
      };

    case START_STOP:
      return {
        ...state,
        paused: !state.paused,
      };

    case RESET_TIMER:
      if (state.timerLabel === 'Session') {
        return {
          ...state,
          timeLeft: state.sessionLength * 60,
        };
      } else if (state.timerLabel === 'Break') {
        return {
          ...state,
          timeLeft: state.breakLength * 60,
        };
      }

    default:
      return state;
  }
};

export default reducer;
