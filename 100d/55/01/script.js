class Clock {
  timer;

  constructor({template}) {
    this.template = template;
  }

  render () {
    const date = new Date();

    let hours = date.getHours();
    if(hours < 10) hours = '0' + hours;

    let minutes = date.getMinutes();
    if(minutes < 10) minutes = '0' + minutes;

    let seconds = date.getSeconds();
    if(seconds < 10) seconds = '0' + seconds;

    const output = this.template
    .replace('h', hours)
    .replace('m', minutes)
    .replace('s', seconds);

    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

class ExtendedClock extends Clock {
  constructor(obj, precision) {
    super(obj);
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

//const clock = new Clock({template: "h:m:s"});
//console.log(clock.timer);
//console.log(clock.template);
//clock.start();
//console.log(clock.timer);
//console.log(clock.template);

//setTimeout(() => clock.stop(), 10000);
const extendedClock = new ExtendedClock({template: 'h:m:s'}, 2000);

extendedClock.start();

setTimeout(() => extendedClock.stop(), 20000);
