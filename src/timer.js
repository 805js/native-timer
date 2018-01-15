export class Timer {
  constructor(element) {
    this.running = null;
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef = document.getElementById(element);

    document
        .getElementById('startBtn')
        .addEventListener('click', this.handleStartClick.bind(this));
    document
        .getElementById('stopBtn')
        .addEventListener('click', this.handleStopClick.bind(this));
    document
        .getElementById('resetBtn')
        .addEventListener('click', this.handleResetClick.bind(this));
    document
        .getElementById('markTimeBtn')
        .addEventListener('click', this.handleMarkTimeClick.bind(this));
  }

  handleStartClick(evt) {
    if (this.running) {
      return;
    }
    this.running = setInterval(() => {
      this.startTimer();
    }, 100);
    evt.preventDefault();
  }

  handleStopClick(evt) {
    clearInterval(this.running);
    this.running = null;
    evt.preventDefault();
  }

  handleResetClick(evt) {
    if (this.running) {
      clearInterval(this.running);
      this.running = null;
    }
    this.resetTimer(); // Manage timer state
    this.resetLapList(); // manage view state
    evt.preventDefault();
  }

  handleMarkTimeClick(evt) {
    this.markLap(this.time);
  }

  startTimer() {
    this.time += 100;
    this.elapsedTime = Math.floor(this.time / 100) / 10;
    this.elementRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
  }

  resetTimer() {
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef.innerHTML = this.elapsedTime;
  }

  markLap(value) {
    const element = document.createElement('li');
    const lapsElement = document.getElementById('lap-list');
    element.innerHTML = parseFloat(Math.floor(value / 100) / 10).toFixed(1);
    lapsElement.appendChild(element);
  }

  resetLapList() {
    const lapsElement = document.getElementById('lap-list');
    while (lapsElement.hasChildNodes()) {
      lapsElement.removeChild(lapsElement.lastChild);
    }
  }
}