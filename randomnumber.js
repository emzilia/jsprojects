"use strict";

let randomInt = (int) => Math.floor(Math.random() * int);

const game = {
	loop: true,
	score: 0,
	answer: randomInt(15),
	checkAnswer: function (response) {
		if (response == game.answer) {
			game.correctAnswer = true;
		} else if (String(response) == "q" || response != response) {
			alert("Fine jeez");
			game.loop = false;
		} else if (response > 15 || response < 0) {
			alert("You best take the game serious now, you hear.");
		} else if (response == game.answer + 1 || response == game.answer - 1) {
			alert("You're close!");
		} else {
			game.incorrectMessage(randomInt(4));
		}
	},
	postRound: function () {
		alert(`Your current score is: ${game.score}`);
		if (game.score > 2) {
			alert(
				"Wow, you rock! I've never seen so many numbers guessed before!",
			);
		}
		game.replay = prompt("Type 'g' to play again!");
		if (game.replay == "g") {
			alert("Alright, I'll come up with a new one!");
			game.correctAnswer = false;
			game.answer = randomInt(15);
		} else {
			alert("Thanks for playing!");
			game.loop = false;
		}
	},
	incorrectMessage: function (randomvalue) {
		switch (randomvalue) {
			case 0:
				alert("Not quite! Try again.");
				break;
			case 1:
				alert("Hmmmmmmm. Try again.");
				break;
			case 2:
				alert("Nope! Try again.");
				break;
			case 3:
				alert("Hmmm. Try again.");
				break;
			case 4:
				alert("Not even close! Try again.");
				break;
		}
	},
};

while (game.loop) {
	game.userResponse = prompt(
		"I'm thinking of a number between 0 and 15, any ideas? Type 'q' to quit.",
	);
	game.checkAnswer(game.userResponse);
	if (game.correctAnswer) {
		alert("You did it! You're so smart (:");
		game.score = ++game.score;
		game.postRound();
	}
}
