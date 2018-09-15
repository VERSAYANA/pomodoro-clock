import React from 'react';
import { decrementTimeLeft } from '../../actionCreators';
import { connect } from 'react-redux';

class TimerStartStop extends React.Component {
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
});

const mapDispatchToProps = (dispatch) => ({
  decrementTimeLeft: () => dispatch(decrementTimeLeft()),
});

TimerStartStop = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimerStartStop);

export default TimerStartStop;
