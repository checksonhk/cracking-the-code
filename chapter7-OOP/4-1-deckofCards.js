/*
 Design the data structures for a generic deck of cards. Explain how you would
subclass the data structures to implement blackjack. 
*/

class Card {
  constructor(value, suit) {
    this.number = number;
    this.suit = suit;
  }
}

class DeckOfCards {
  const;
  constructor(cards = []) {
    this.cards = cards;
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const randomIdx = Math.floor(Math.random() * this.cards.length);
      let temp = this.cards[i];
      this.cards[i] = this.cards[randomIdx];
      card[randomIdx] = this.cards[i];
    }
    return this.cards;
  }

  draw() {
    return this.cards.pop();
  }
}

class BlackJack extends DeckOfCards {
  score() {
    let value = 0;
    let aces = 0;

    for (const card of this.cards) {
      value += Math.min(card.number, 10);
      aces += 1;
    }
    while (value <= 11) {
      if (aces) {
        value += 10;
        aces--;
      }
    }
    return value;
  }
}
