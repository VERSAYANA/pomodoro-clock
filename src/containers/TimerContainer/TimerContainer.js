import { connect } from 'react-redux';
import { startStop, resetTimer } from '../../actionCreators';
import TimerWrapper from '../../components/TimerWrapper/TimerWrapper';
import formatSecondsToMMSS from '../../modules/formatSecondsToMMSS';

const mapStateToProps = (state) => ({
  paused: state.paused,
  timerLabel: state.timerLabel,
  timeLeft: formatSecondsToMMSS(state.timeLeft),
});

const mapDispatchToProps = (dispatch) => ({
  startStop: () => dispatch(startStop()),
  resetTimer: () => dispatch(resetTimer()),
});

const TimerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerWrapper);

export default TimerContainer;
