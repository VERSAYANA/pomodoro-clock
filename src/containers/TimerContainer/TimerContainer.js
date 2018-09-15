import { connect } from 'react-redux';
import { startStop, resetTimer, decrementTimeLeft } from '../../actionCreators';
import TimerWrapper from '../../components/TimerWrapper/TimerWrapper';
import formatSecondsToMMSS from '../../modules/formatSecondsToMMSS';

const mapStateToProps = (state) => ({
  paused: state.paused,
  timerLabel: formatSecondsToMMSS(state.timerLabel),
  timeLeft: state.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
  startStop: () => dispatch(startStop()),
  resetTimer: () => dispatch(resetTimer()),
  decrementTimeLeft: () => dispatch(decrementTimeLeft()),
});

const TimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerWrapper);

export default TimerContainer;
