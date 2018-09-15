import React from 'react';
import { decrementTimeLeft, timeOver } from '../../actionCreators';
import { connect } from 'react-redux';

class TimerController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };

    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount() {
    if (!this.props.paused) {
      this.startTimer();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.paused) {
      clearInterval(this.state.interval);
    }
    if (!this.props.paused && prevProps.paused) {
      this.startTimer();
    }
    if (this.props.timeLeft < 0) {
      this.props.timeOver();
    }
  }

  startTimer() {
    const interval = setInterval(this.props.decrementTimeLeft, 1000);
    this.setState({
      interval,
    });
  }
  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  paused: state.paused,
  timeLeft: state.timeLeft,
});

const mapDispatchToProps = (dispatch) => ({
  decrementTimeLeft: () => dispatch(decrementTimeLeft()),
  timeOver: () => dispatch(timeOver()),
});

TimerController = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerController);

export default TimerController;
