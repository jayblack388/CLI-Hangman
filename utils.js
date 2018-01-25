const fs = require("fs");
const inquirer = require("inquirer");
const getRanNum = (arr) => {
	return Math.floor(Math.random() * arr.length);
};
const getWord = (catagory) => {
	let data = fs.readFileSync(catagory, "utf8");
	let dataArr = data.split(",");
	let ranNum = getRanNum(dataArr);
	let word = dataArr[ranNum];
	return word;
};

module.exports = {
	getRanNum, getWord
}

// userPrompt test case
// console.log("first");
// userPrompt();
// console.log("last");


// getWord test case seems to work
// console.log("first");
// console.log(getWord());
// console.log("last");