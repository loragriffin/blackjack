// variables
var deck = [
  { point: 13, suit: 'hearts', rank: 'king'},
  { point: 13, suit: 'diamonds', rank: 'king'},
  { point: 13, suit: 'clubs', rank: 'king'},
  { point: 13, suit: 'spades', rank: 'king'},
  { point: 12, suit: 'hearts', rank: 'queen'},
  { point: 12, suit: 'diamonds', rank: 'queen'},
  { point: 12, suit: 'clubs', rank: 'queen'},
  { point: 12, suit: 'spades', rank: 'queen'},
  { point: 11, suit: 'hearts', rank: 'jack'},
  { point: 11, suit: 'diamonds', rank: 'jack'},
  { point: 11, suit: 'clubs', rank: 'jack'},
  { point: 11, suit: 'spades', rank: 'jack'},
  { point: 10, suit: 'hearts', rank: '10'},
  { point: 10, suit: 'diamonds', rank: '10'},
  { point: 10, suit: 'clubs', rank: '10'},
  { point: 10, suit: 'spades', rank: '10'},
  { point: 9, suit: 'hearts', rank: '9'},
  { point: 9, suit: 'diamonds', rank: '9'},
  { point: 9, suit: 'clubs', rank: '9'},
  { point: 9, suit: 'spades', rank: '9'},
  { point: 8, suit: 'hearts', rank: '8'},
  { point: 8, suit: 'diamonds', rank: '8'},
  { point: 8, suit: 'clubs', rank: '8'},
  { point: 8, suit: 'spades', rank: '8'},
  { point: 7, suit: 'hearts', rank: '7'},
  { point: 7, suit: 'diamonds', rank: '7'},
  { point: 7, suit: 'clubs', rank: '7'},
  { point: 7, suit: 'spades', rank: '7'},
  { point: 6, suit: 'hearts', rank: '6'},
  { point: 6, suit: 'diamonds', rank: '6'},
  { point: 6, suit: 'clubs', rank: '6'},
  { point: 6, suit: 'spades', rank: '6'},
  { point: 5, suit: 'hearts', rank: '5'},
  { point: 5, suit: 'diamonds', rank: '5'},
  { point: 5, suit: 'clubs', rank: '5'},
  { point: 5, suit: 'spades', rank: '5'},
  { point: 4, suit: 'hearts', rank: '4'},
  { point: 4, suit: 'diamonds', rank: '4'},
  { point: 4, suit: 'clubs', rank: '4'},
  { point: 4, suit: 'spades', rank: '4'},
  { point: 3, suit: 'hearts', rank: '3'},
  { point: 3, suit: 'diamonds', rank: '3'},
  { point: 3, suit: 'clubs', rank: '3'},
  { point: 3, suit: 'spades', rank: '3'},
  { point: 2, suit: 'hearts', rank: '2'},
  { point: 2, suit: 'diamonds', rank: '2'},
  { point: 2, suit: 'clubs', rank: '2'},
  { point: 2, suit: 'spades', rank: '2'},
  { point: 1, suit: 'hearts', rank: 'ace'},
  { point: 1, suit: 'diamonds', rank: 'ace'},
  { point: 1, suit: 'clubs', rank: 'ace'},
  { point: 1, suit: 'spades', rank: 'ace'},
];


function getCardImageUrl(deck, index, suit, rank) {
  return '<img src=\"images\\' + deck[index].rank + '_of_' + deck[index].suit + '.png\">'
}

function deal() {
  $('#dealer-hand').append(getCardImageUrl);
  $('#dealer-hand').append(getCardImageUrl);
  $('#player-hand').append(getCardImageUrl);
  $('#player-hand').append(getCardImageUrl);

};

function hit() {
    $('#player-hand').append(getCardImageUrl);
};


$(document).ready(function() {
  $('#deal-button').click(function() {
    deal()
  });

  $('#hit-button').click(function() {
    hit()
  });

});
