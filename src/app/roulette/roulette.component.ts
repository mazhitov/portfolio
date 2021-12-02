import { Component, OnInit } from '@angular/core';
import { RouletteService } from './shared/roulette.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {
  color = 'black';
  balance:number = 100;
  bet:number = 1;
  resultNumbers: number[] = [];
  constructor(private rouletteService: RouletteService) {}

  ngOnInit() {
    this.rouletteService.newNumber.subscribe(number => {
      this.resultNumbers.push(number);
      this.getSum(number);
    });
  }

  onClickStart() {
    this.rouletteService.start();
  }

  onClickStop() {
    this.rouletteService.stop();
  }

  onClickReset() {
    this.resultNumbers = [];
  }

  getSum(newNumber: number) {
    const resultColor = this.rouletteService.getColor(newNumber);
    if(resultColor === this.color) {
      if(resultColor === 'zero') {
        this.balance+=this.bet*35;
        return;
      }
      this.balance += this.bet;
    } else {
      this.balance-=this.bet;
    }
  }
}
