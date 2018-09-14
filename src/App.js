import React, { Component } from 'react';
import TimerWrapper from './components/TimerWrapper/TimerWrapper';
import Length from './components/Length/Length';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Length title="Session" value={25} />
        <TimerWrapper />
        <Length title="Break" value={5} />
      </div>
    );
  }
}

export default App;
