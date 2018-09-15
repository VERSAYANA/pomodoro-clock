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

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  paused: true,
  timerLabel: 'Session',
  timeLeft: 1500,
  audio: 'paused',
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
          audio: 'reset',
        };
      } else if (state.timerLabel === 'Break') {
        return {
          ...state,
          timeLeft: state.breakLength * 60,
          audio: 'reset',
        };
      }
      break;
    case DECREMENT_TIMELEFT:
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case TIME_OVER:
      if (state.timerLabel === 'Session') {
        return {
          ...state,
          timerLabel: 'Break',
          timeLeft: state.breakLength * 60,
          audio: 'play',
        };
      } else if (state.timerLabel === 'Break') {
        return {
          ...state,
          timerLabel: 'Session',
          timeLeft: state.sessionLength * 60,
          audio: 'play',
        };
      }
      break;

    default:
      return state;
  }
};

export default reducer;
