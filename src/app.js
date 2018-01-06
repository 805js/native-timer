var running = null;

function Timer(element) {
  this.running = null;
  this.laps = [];
  this.time = 0;
  this.elapsedTime = '0.0';
  this.elementRef = document.getElementById(element);
  console.info("New Timer: ", this);
  this.startTimer = function () {
    this.time += 100;
    this.elapsedTime = Math.floor(this.time / 100) / 10;
    this.elementRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
    // console.info("Start: ", this);
  };
  this.resetTimer = function () {
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef.innerHTML = this.elapsedTime;
    // console.info("Reset: ", this);
    // TODO also clear the list of marked times.
  };
  this.markLap = function (value) {
    var element = document.createElement('li');
    var lapsElement = document.getElementById('lap-list');
    element.innerHTML = parseFloat(Math.floor(value / 100) / 10).toFixed(1);
    lapsElement.appendChild(element);
  };
  this.resetLapList = function() {
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
  // console.info("Start click", evt);
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
  // console.info("Stop click", evt);
  clearInterval(running);
  running = null;
  evt.preventDefault();
});

/*
 * Listen for rest click
 */
document.getElementById("resetBtn").addEventListener('click', function (evt) {
  // console.info("Reset click", evt);
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
