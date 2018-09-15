import { connect } from 'react-redux';
import { startStop, resetTimer, decrementTimeLeft } from '../../actionCreators';
import TimerWrapper from '../../components/TimerWrapper/TimerWrapper';

const mapStateToProps = (state) => ({
  paused: state.paused,
  timerLabel: state.timerLabel,
  timeLeft: state.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
  startStop: () => dispatch(startStop()),
  resetTimer: () => dispatch(resetTimer()),
  decrementTimeLeft: () => dispatch(decrementTimeLeft()),
});

const TimerWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerWrapper);
