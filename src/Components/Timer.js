import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount = () => {
    this.getTimeTo(this.props.goalTime);
  };
  //update time to get the seconds
  componentDidMount = () => {
    setInterval(() => {
      this.getTimeTo(this.props.goalTime);
    }, 1000);
  };

  // 1 hour = 60 min = 60 × 60 secs = 3600 secs = 3600 × 1000 milliseconds = 3,600,000 ms. 86400000 ms in a day
  //sec div mill by 1000 because we know our metric. modulo to get leftover secs after the mins are taken out
  //min div mill by 1000 then by 60 again. modulo to get what is leftover after the hours are taken away.
  // 3600000 ms in an hour. modulo 24 for getting rid of days
  getTimeTo(goalTime) {
    //get time btwn now and goal time
    const ms = Date.parse(goalTime) - Date.parse(new Date());
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 3600000) % 24);
    const days = Math.floor(ms / 86400000);
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }
  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    return (
      <div className="content time-div">
        <div className="time">
          <span className="num">
            {!isNaN(this.state.days) ? this.leading0(this.state.days) : '?'}
          </span>{' '}
          days
        </div>
        <div className="time">
          <span className="num">
            {!isNaN(this.state.hours) ? this.leading0(this.state.hours) : '?'}
          </span>{' '}
          hours
        </div>
        <div className="time">
          <span className="num">
            {!isNaN(this.state.minutes)
              ? this.leading0(this.state.minutes)
              : '?'}
          </span>{' '}
          minutes
        </div>
        <div className="time">
          <span className="num">
            {!isNaN(this.state.seconds)
              ? this.leading0(this.state.seconds)
              : '?'}
          </span>{' '}
          seconds
        </div>
      </div>
    );
  }
}

export default Timer;
