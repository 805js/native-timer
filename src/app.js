class Timer {
    constructor(element) {
        this.running = null;
        this.time = 0;
        this.elapsedTime = '0.0';
        this.appRef = document.getElementById('app');
        this.timerRef = document.getElementById('timer-display');

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
        this.appRef.classList.add('running');
        if (this.running) {
            return;
        }
        this.running = setInterval(() => {
            this.time += 100;
            this.elapsedTime = Math.floor(this.time / 100) / 10;
            this.timerRef.innerHTML = parseFloat(this.elapsedTime).toFixed(1);
        }, 100);
    }

    handleStopClick(evt) {
        this.appRef.classList.remove('running');
        clearInterval(this.running);
        this.running = null;
    }

    handleResetClick(evt) {
        this.appRef.classList.remove('running');
        if (this.running) {
            clearInterval(this.running);
            this.running = null;
        }

        // Manage timer state
        this.time = 0;
        this.elapsedTime = '0.0';
        this.timerRef.innerHTML = this.elapsedTime;

        // manage view state
        this.appRef.classList.remove('running');
        const lapsElement = document.getElementById('lap-list');
        while (lapsElement.hasChildNodes()) {
            lapsElement.removeChild(lapsElement.lastChild);
        }
    }

    handleMarkTimeClick(evt) {
        const element = document.createElement('li');
        const lapsElement = document.getElementById('lap-list');
        element.innerHTML = parseFloat(Math.floor(this.time / 100) / 10).toFixed(1);
        app.classList.add('added-flash');
        setTimeout(function () {
            app.classList.remove('added-flash');
        }, 50);
        lapsElement.appendChild(element);
    }
}

const timer = new Timer();