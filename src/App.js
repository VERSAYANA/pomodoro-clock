import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimerController from './containers/TimerController/TimerController';
import TimerContainer from './containers/TimerContainer/TimerContainer';
import LengthContainer from './containers/LengthContainer/LengthContainer';
import BeepAudio from './containers/BeepAudio/BeepAudio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={`App ${this.props.paused ? 'pause' : 'play'}`}>
        <TimerController />
        <BeepAudio />
        <LengthContainer title="Session" />
        <TimerContainer />
        <LengthContainer title="Break" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  paused: state.paused,
});

App = connect(
  mapStateToProps,
  null,
)(App);

export default App;
