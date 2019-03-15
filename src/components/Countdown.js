import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      pt: {
        titulo: "Início da próxima fase em:",
        dia: "Dias",
        hora: "Horas",
        min: "Mins",
        seg: "Seg"
      },
      en: {
        titulo: "Game Jam+ begins in:",
        dia: "Days",
        hora: "Hours",
        min: "Mins",
        seg: "Secs"
      }
    }
  }

  language(){
    const lang = navigator.language;

    if(lang === 'pt-BR' || lang === 'pt'){
      return this.state.pt;
    } else {
      return this.state.en;        
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
        <section className="countdown">
          <h1>{ this.language().titulo }</h1>
          <div className="countdown__container">
            <div className="container">
              <div>
                <span>{this.addLeadingZeros(countDown.days)}</span>
                <p>{ this.language().dia }</p>
              </div>
              <div>
                <span>{this.addLeadingZeros(countDown.hours)}</span>
                <p>{ this.language().hora }</p>
              </div>
              <div>
                <span>{this.addLeadingZeros(countDown.min)}</span>
                <p>{ this.language().min }</p>
              </div>
              <div>
                <span>{this.addLeadingZeros(countDown.sec)}</span>
                <p>{ this.language().seg }</p>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

Countdown.defaultProps = {
  date: new Date()
};

export default Countdown;