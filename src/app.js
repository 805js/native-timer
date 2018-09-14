var running = null;
var app = document.getElementById('app');

function Timer(element) {
    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef = document.getElementById(element);
    this.startTimer = function () {
        this.time += 100;
        this.elapsedTime = Math.floor(this.time / 100) / 10;
        this.elementRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
    };
    this.resetTimer = function () {
        this.time = 0;
        this.elapsedTime = '0.0';
        this.elementRef.innerHTML = this.elapsedTime;
    };
    this.markLap = function (value) {
        var element = document.createElement('li');
        var lapsElement = document.getElementById('lap-list');
        element.innerHTML = parseFloat(Math.floor(value / 100) / 10).toFixed(1);
        lapsElement.appendChild(element);
    };
    this.resetLapList = function () {
        var lapsElement = document.getElementById('lap-list');
        while (lapsElement.hasChildNodes()) {
            lapsElement.removeChild(lapsElement.lastChild);
        }
    };
}

var timer = new Timer('timer-display');

/*
 * Listen for start click
 */
document.getElementById("startBtn").addEventListener('click', function (evt) {
    if (running) {
        return;
    }
    app.classList.add('running');
    running = setInterval(function () {
        timer.startTimer();
    }, 100);
});

/*
 * Listen for stop click
 */
document.getElementById("stopBtn").addEventListener('click', function (evt) {
    clearInterval(running);
    app.classList.remove('running');
    running = null;
});

/*
 * Listen for reset click
 */
document.getElementById("resetBtn").addEventListener('click', function (evt) {
    if (running) {
        clearInterval(running);
        running = null;
    }
    app.classList.remove('running');
    timer.resetTimer(); // Manage timer state
    timer.resetLapList(); // manage view state
});

/*
 * Listen for mark click
 */
document.getElementById("markTimeBtn").addEventListener('click', function (evt) {
    timer.markLap(timer.time);
    app.classList.add('added-flash');
    setTimeout(function () {
        app.classList.remove('added-flash');
    }, 50);
});
