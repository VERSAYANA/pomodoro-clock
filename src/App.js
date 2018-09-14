import React, { Component } from 'react';
import TimerWrapper from './components/TimerWrapper/TimerWrapper';
import LengthContainer from './containers/LengthContainer/LengthContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LengthContainer title="Session" />
        <TimerWrapper />
        <LengthContainer title="Break" />
      </div>
    );
  }
}

export default App;
