import { Component } from '@angular/core';
import { CardDeck } from './lib/CardDeck';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent  {
  cardDeck = new CardDeck();
  currentCards = this.cardDeck.getCards(2);

  getScoreCards() {
    let score = 0;
    for (const card of this.currentCards) {
      score += card.getScore();
    }
    return score;
  }

  onGiveAnotherCard() {
    this.currentCards.push(this.cardDeck.getCard());
  }

  onReset() {
    this.cardDeck = new CardDeck();
    this.currentCards = this.cardDeck.getCards(2);
  }

  showResult() {
    if (this.getScoreCards() === 21) {
      return 'You win!'
    } else if(this.getScoreCards() > 21) {
      return 'You lose!';
    }
    return;
  }
}
