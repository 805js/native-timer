import css from './style/style.scss'

var running = null;

class Timer {
  constructor(element) {
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef = document.getElementById(element);
  }

  startTimer () {
    this.time += 100;
    this.elapsedTime = Math.floor(this.time / 100) / 10;
    this.elementRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
  };

  resetTimer () {
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef.innerHTML = this.elapsedTime;
  };

  markLap (value) {
    var element = document.createElement('li');
    var lapsElement = document.getElementById('lap-list');
    element.innerHTML = parseFloat(Math.floor(value / 100) / 10).toFixed(1);
    lapsElement.appendChild(element);
  };

  resetLapList () {
    var lapsElement = document.getElementById('lap-list');
    while(lapsElement.hasChildNodes()){
      lapsElement.removeChild(lapsElement.lastChild);
    }
  };
}

var timer = new Timer('timer-display');

/*
 * Listen for start click
 */
document.getElementById("startBtn").addEventListener('click', function (evt) {
  if(running) {
    return;
  }
  running = setInterval(function () {
    timer.startTimer();
  }, 100);
  evt.preventDefault();
});

/*
 * Listen for stop click
 */
document.getElementById("stopBtn").addEventListener('click', function (evt) {
  clearInterval(running);
  running = null;
  evt.preventDefault();
});

/*
 * Listen for reset click
 */
document.getElementById("resetBtn").addEventListener('click', function (evt) {
  if (running) {
    clearInterval(running);
    running = null;
  }
  timer.resetTimer(); // Manage timer state
  timer.resetLapList(); // manage view state
  evt.preventDefault();
});

/*
 * Listen for mark click
 */
document.getElementById("markTimeBtn").addEventListener('click', function (evt) {
  timer.markLap(timer.time);
});
