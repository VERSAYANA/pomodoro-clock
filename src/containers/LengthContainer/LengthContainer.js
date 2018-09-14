import { connect } from 'react-redux';
import Length from '../../components/Length/Length';
import {
  incrementSession,
  decrementSession,
  incrementBreak,
  decrementBreak,
} from '../../actionCreators';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.title === 'Session') {
    return {
      value: state.sessionLength,
    };
  }

  if (ownProps.title === 'Break') {
    return {
      value: state.breakLength,
    };
  }
};

const mapDisptchToProps = (dispatch, ownProps) => {
  if (ownProps.title === 'Session') {
    return {
      increment: () => dispatch(incrementSession()),
      decrement: () => dispatch(decrementSession()),
    };
  }

  if (ownProps.title === 'Break') {
    return {
      increment: () => dispatch(incrementBreak()),
      decrement: () => dispatch(decrementBreak()),
    };
  }
};

const LengthContainer = connect(
  mapStateToProps,
  mapDisptchToProps,
)(Length);

export default LengthContainer;
