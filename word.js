const Letter = require("./letter");
const fs = require("fs");
const getRanNum = require("./utils");
class Word {
	constructor(pickedTerm) {
		this.lettersArr = [];
		this.attemptsArr = [];
		this.attempts = 8;
		this.pickedTerm = pickedTerm;
		for (let i = 0; i < this.pickedTerm.length; i++) {
			this.lettersArr.push(new Letter(this.pickedTerm[i]));
		}
	};
	checkInput(input) {
		this.incorrect = true;
		this.inputTried = false;
		let letter = input.letter.toUpperCase();
		if (this.attemptsArr.indexOf(letter) != -1) {
			this.inputTried = true;
		} else {
			this.attemptsArr.push(letter);
			for (let i = 0; i < this.lettersArr.length; i++) {
				if (this.lettersArr[i].letter.toUpperCase() == letter) {
					this.incorrect = false;
					this.lettersArr[i].shown = true;
				}
			}
			if (this.incorrect) {
				this.attempts--;
			}	
		}
	};
	isComplete() {
		for (let i = 0; i < this.lettersArr.length; i++) {
			if (!this.lettersArr[i].shown) {
				return false;
			}
		}
		return true;
	};
	renderWord() {
		let out = "";
		for (let i = 0; i < this.lettersArr.length; i++) {
			out += this.lettersArr[i].printLetter();
		}
		return out;
	};
};
module.exports = Word;
// let newWord = new Word("Phrase One");
// console.log(newWord);
// console.log(newWord.renderWord());
// console.log(newWord.isComplete());
// console.log(newWord.checkInput());