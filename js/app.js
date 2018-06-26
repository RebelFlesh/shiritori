'use strict';
var player1;
var player2;
var currentPlayer = player1;
var startingLetter;
var userWord = document.getElementById('word');


//Constructors for player, game, dictionary, settings
function Game (dictionary) {
  this.scores = [];
  this.dictionary = dictionary;
  this.time = '';
}
Game.wordsTyped = [];
var letter='t';
Game.players = [];

function Player (name, profilePic) {
  this.name = name;
  this.highScore = 0;
  this.profilePic = profilePic || 'img/no-image.jpg';

  Game.players.push (this);
}

function Dictionary (name) {
  this.name = name;
  this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
}
var listOfWords = ['tiger','rabbit','rhino'];



function switchPlayer() {
  if(currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

var form= document.querySelector('form');
form.addEventListener('submit',function(event){
  event.preventDefault();
  var input=event.target.word.value;
  if(listOfWords.includes(input)&&!Game.wordsTyped.includes(input)&&input.startsWith(letter)){
    listOfWords.splice(listOfWords.indexOf(input),1);
    Game.wordsTyped.push(input);
    letter=input.charAt(input.length-1);
    //score adjust needs time left over
    Game.scores=input.length-3
    console.log('is not broke');
  }
  else{
    console.log('something is broke');
  }
  
});
  
function initialize() {
  var dict = new Dictionary('English');
  new Game(dict);
  player1 = new Player(name);
  player2 = new Player(name);
  startingLetter = Math.floor(Math.random() * dict.alphabet.length);
  userWord.setAttribute('placeholder', dict.alphabet[startingLetter]);
}

initialize();