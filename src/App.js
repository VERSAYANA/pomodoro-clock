import React, { Component } from 'react';
import TimerContainer from './containers/TimerContainer/TimerContainer';
import LengthContainer from './containers/LengthContainer/LengthContainer';
import TimerStartStop from './containers/TimerStartStop/TimerStartStop';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimerStartStop />
        <LengthContainer title="Session" />
        <TimerContainer />
        <LengthContainer title="Break" />
      </div>
    );
  }
}

export default App;
