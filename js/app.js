'use strict';

//Constructors for player, game, dictionary, settings
function Player (name, highScore, viewStat, profilePic) {
  this.name = name;
  this.highScore = highScore;
  this.viewStat = viewStat;
  this.profilePic = profilePic;
}

function Dictionary (name, listOfWords, alphabet) {
  this.name = name;
  this.listOfWords = [];
  this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
}


function Game (scores, wordsTyped, dictionary, time, players) {
  this.scores = [];
  this.wordsTyped = [];
  this.dictionary = dictionary;
  this.time = time;
  this.players = ['Player1', 'Player2'];
}