const inquirer = require("inquirer");
// const fs = require("fs");
const Word = require("./word");
const {getRanNum, getWord} = require("./utils");
let catagory = "movies.txt";
class Game {
	constructor(catagory) {
		this.word = new Word(getWord(catagory));
	}
};
module.exports = Game;
// let newGame = new Game;
// console.log("first");
// console.log(newGame.word.pickedTerm);
// console.log(newGame.word.renderWord());
// console.log("last");
