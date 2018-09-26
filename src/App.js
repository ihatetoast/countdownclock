import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';
import BlankTimer from './Components/BlankTimer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: '1 January 2019',
      newEndDate: '',
      newEndDateGiven: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ newEndDate: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ newEndDate: this.state.newEndDate, newEndDateGiven: true });
  }

  render() {
    const newEndDateGiven = this.state.newEndDateGiven;
    let timer;
    let date;
    if (newEndDateGiven) {
      timer = <Timer goalTime={this.state.newEndDate} />;
      date = this.state.newEndDate;
    } else {
      timer = <BlankTimer />;
      date = '. . .';
    }
    return (
      <div className="App">
        <div className="content title-div">
          <h1>Countdown to {this.state.endDate}</h1>
          <h2>Because we need another way to fire up the anxiety</h2>
        </div>
        <Timer goalTime={this.state.endDate} />

        <div className="content input-div">
          <form onSubmit={this.handleSubmit}>
            <p>
              Do you need another date to fret about? If so, enter one below:
            </p>
            <label>
              New date:
              <input
                type="text"
                value={this.state.newEndDate}
                onChange={this.handleChange}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>
          <h1>Countdown to {date}</h1>
          {timer}
        </div>
      </div>
    );
  }
}

export default App;
