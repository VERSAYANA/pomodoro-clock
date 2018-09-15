import React, { Component } from 'react';
import TimerController from './containers/TimerController/TimerController';
import TimerContainer from './containers/TimerContainer/TimerContainer';
import LengthContainer from './containers/LengthContainer/LengthContainer';
import BeepAudio from './containers/BeepAudio/BeepAudio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerController />
        <BeepAudio />
        <LengthContainer title="Session" />
        <TimerContainer />
        <LengthContainer title="Break" />
      </div>
    );
  }
}

export default App;
