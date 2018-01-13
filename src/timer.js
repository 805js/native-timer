export class Timer {

  constructor(element) {
    this.running = null;
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