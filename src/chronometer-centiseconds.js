class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // let str = "0";
    // let val = value.toString();
    // if (value > 9) {
    //   return val;
    // } else {
    //   return str + val;
    // }
    if (value > 9){
      return `${value}`
    }else {return `0${value}`}
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let sec = this.computeTwoDigitNumber(this.getSeconds());
    let min = this.computeTwoDigitNumber(this.getMinutes());
    let cs = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${min}:${sec}.${cs}`;
  }
}
