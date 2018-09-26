import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { endDate: '1 January 2019', newEndDate: '. . .' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(`date submitted: ${this.state.newEndDate}`);
    this.setState({ newEndDate: this.state.newEndDate });
  }

  handleChange(e) {
    this.setState({ newEndDate: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="content title-div">
          <h1>Countdown to {this.state.endDate}</h1>
          <h2>Because we need another way to fire up the anxiety</h2>
        </div>
        <Timer />

        <div className="content input-div">
          <p>Do you need another date to fret about? If so, enter one below:</p>
          <label>
            New date:
            <input
              type="text"
              onChange={this.handleChange}
              placeholder=". . ."
            />
          </label>

          <button onClick={this.handleSubmit}>Submit</button>

          <h1>Countdown to {this.state.newEndDate}</h1>
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
