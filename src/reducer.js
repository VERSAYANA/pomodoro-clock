import {
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  INCREMENT_BREAK,
  DECREMENT_BREAK,
} from './actionTypes';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
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
  }
};

export default reducer;
