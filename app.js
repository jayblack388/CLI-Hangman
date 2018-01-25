const {getRanNum, getWord} = require("./utils");
const Game = require("./game");
const Word = require("./word");
const Letter = require("./letter");
const fs = require("fs");
const inquirer = require("inquirer");
let game;
let catagory;

const pickCatagory = () => {
	inquirer.prompt([{
		type: "list",
		message: "Welcome to Hangman\nWhat Catagoy would you like to play?",
		name: "catagory",
		choices: ["Movies", "Songs", "TV Shows", "All"]
	}]).then((input)=>{
		switch (input.catagory) {
			case "Movies":
				catagory = "movies.txt";
				break;
			case "Songs":
				catagory = "songs.txt";
				break;
			case "TV Shows":
				catagory = "tv-shows.txt";
				break;
			case "All":
				catagory = "randoms.txt"
				break;
			default:
			console.log("Invalid Request");
		};
		playGame();
	})
}

const playGame = () => {
	// pickCatagory();
	game = new Game(catagory);
	// console.log(game.word.pickedTerm);
	console.log("Your word looks like:")
	console.log(game.word.renderWord())
	userPrompt();
};

const rePlay = () => {
	inquirer.prompt([{
		type: 'confirm',
		message: 'Would you like to play again?',
		name: 'replay'
	}]).then((res) => {
		if (res.replay) {
			pickCatagory();
		} else {
			console.log("Thanks for coming.")
		}
	})
};

const userPrompt = () => {
	inquirer.prompt([
		{
			type: "input",
			name: 'letter',
			message: "Please Pick One Letter at a Time",
			validate: (str) => {
				let re = new RegExp("^[a-zA-Z\s]{1,1}$")
				if (re.test(str)) {
					return true;
				} else {
					return false;
					console.log("Please just One Letter");
				}
			}
		}
	]).then((res)=>{
		let input = new Letter(res.letter);
		game.word.checkInput(input);
		if (game.word.inputTried) {
			console.log("You've already guessed that letter.");
			userPrompt();
		} else {
			if (game.word.isComplete() == true) {
				console.log(game.word.renderWord());
				console.log("You Win!");
				rePlay();
			} else if (game.word.attempts === 0) {
				console.log("You lose. The correct answer was: \n" + "'" + game.word.pickedTerm + "'");
				rePlay();
			} else {
				console.log("You have " + game.word.attempts + " remaining attempts.");
				console.log(game.word.renderWord());
				console.log(`Your guesses: ` + game.word.attemptsArr)
				userPrompt();
			}
		}
	})
};
pickCatagory();
// playGame();