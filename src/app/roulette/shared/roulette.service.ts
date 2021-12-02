import { EventEmitter } from '@angular/core';

export class RouletteService {
  newNumber = new EventEmitter<number>();
  private interval!: number;

  generateNumber() {
    return Math.floor(Math.random() * 37);
  }

  start() {
    if(this.interval) return;
    this.interval = setInterval(() => {
      const getNumber = this.generateNumber();
      this.newNumber.emit(getNumber);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  isEven(number: number) {
    return number % 2 === 0;
  }

  getColor(number: number) {
    if (number === 0) {
      return 'zero';
    } else if ((number >= 1 && number <= 10) || (number >= 19 && number <= 28)) {
      return this.isEven(number) ? 'black' : 'red';
    } else if ((number >= 11 && number <= 18) || (number >= 29 && number <= 36)) {
      return this.isEven(number) ? 'red' : 'black';
    } else {
      return 'unknown';
    }
  }
}
