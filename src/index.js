import css from './style/style.scss'

import {Timer} from "./timer";

var running = null;


var timer = new Timer('timer-display');

/*
 * Listen for start click and tell timer what to do
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
 * Listen for stop click and tell timer what to do
 */
document.getElementById("stopBtn").addEventListener('click', function (evt) {
  clearInterval(running);
  running = null;
  evt.preventDefault();
});

/*
 * Listen for reset click and tell timer what to do
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
 * Listen for mark click and tell timer what to do
 */
document.getElementById("markTimeBtn").addEventListener('click', function (evt) {
  timer.markLap(timer.time);
});
