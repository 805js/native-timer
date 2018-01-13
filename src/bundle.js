/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var running = null;

var Timer = function () {
  function Timer() {
    _classCallCheck(this, Timer);

    this.time = 0;
    this.elapsedTime = '0.0';
    this.elementRef = document.getElementById(element);
  }

  _createClass(Timer, [{
    key: 'startTimer',
    value: function startTimer() {
      this.time += 100;
      this.elapsedTime = Math.floor(this.time / 100) / 10;
      this.elementRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
    }
  }, {
    key: 'resetTimer',
    value: function resetTimer() {
      this.time = 0;
      this.elapsedTime = '0.0';
      this.elementRef.innerHTML = this.elapsedTime;
    }
  }, {
    key: 'markLap',
    value: function markLap(value) {
      var element = document.createElement('li');
      var lapsElement = document.getElementById('lap-list');
      element.innerHTML = parseFloat(Math.floor(value / 100) / 10).toFixed(1);
      lapsElement.appendChild(element);
    }
  }, {
    key: 'resetLapList',
    value: function resetLapList() {
      var lapsElement = document.getElementById('lap-list');
      while (lapsElement.hasChildNodes()) {
        lapsElement.removeChild(lapsElement.lastChild);
      }
    }
  }]);

  return Timer;
}();

var timer = new Timer('timer-display');

/*
 * Listen for start click
 */
document.getElementById("startBtn").addEventListener('click', function (evt) {
  if (running) {
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

/***/ })
/******/ ]);