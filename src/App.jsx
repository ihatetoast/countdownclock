import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content title-div">
          <h1>Countdown to New Year's Day</h1>
          <h2>Because we need another way to fire up the anxiety</h2>
        </div>
        <div className="content time-div">
          <div className="time"><span className="num" id="days">X</span> days</div>
          <div className="time"><span className="num" id="hours">X</span> hours</div>
          <div className="time"><span className="num" id="minutes">X</span> minutes</div>
          <div className="time"><span className="num" id="seconds">X</span> seconds</div>
        </div>
        <div className="content input-div">
          <p>Do you need another date to fret about? If so, enter one below:</p>
          <input placeholder="new date" />
          <button>Submit</button>
        </div>
      </div>
    )
  }
};

export default App;
