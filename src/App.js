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
        <div className="countdown-div content-box">
          <h1 className="header1">Countdown to </h1>
          <h1 className="date1">{this.state.endDate}</h1>
          <h2>Because we need another way to fire up anxiety</h2>
          <Timer goalTime={this.state.endDate} />
        </div>

        <div className="form-div content-box">
          <p>
            Do you need another date to fret about? If so, enter date below:
          </p>
          <form onSubmit={this.handleSubmit}>
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
        </div>
        <div className="countdown-div content-box">
          <h1 className="header2">Countdown to </h1>
          <h1 className="date2">{date}</h1>
          {timer}
        </div>
        <footer>
          <p>
            Katy Cassidy | ihatetoast | {new Date(Date.now()).getFullYear()}
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
