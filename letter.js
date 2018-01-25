class Letter {
	constructor(letter) {
		this.letter = letter;
		if (this.letter === " " || this.letter === "'" || this.letter === ":" || this.letter === "-") {
			this.shown = true;
		} else {
		this.shown = false;
		}

	}
	printLetter() {
		if (this.shown) {
			return this.letter;
		} else {
			return "="
		}
	}
}
module.exports = Letter;

// let newLet = new Letter("A");
//console.log(newLet);
// console.log(newLet.printLetter())