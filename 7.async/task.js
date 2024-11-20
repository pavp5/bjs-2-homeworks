class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.forEach((item) => {
            if (item.time === time) {
                console.warn('Уже присутствует звонок на это же время');
                return;
            }
        });

        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(time) {
        if (time) {
            this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
        }
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return (`${now.getHours()}:${now.getMinutes()}`);
    }

    start() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time === this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
                    item.callback();
                }
            });
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}