"use strict";

console.log(
	"*** Hello, and welcome to the Lauren Plushie Archive Terminal! ***",
);
console.log(
	"Dedicated to logging the most important information about your most important friends!",
);

const terminal = {
	loop: true,
	response: "",
	friendArray: [],
	friendNameList: [],
	CreateFriend: function (name, age) {
		this.name = name;
		this.age = age;
		return this;
	},
	listFriends: function () {
		alert(terminal.friendNameList);
	},
	addFriends: function () {
		let newFriendName = prompt("Please enter the new friend's name!");
		let newFriendAge = prompt(`And just how old is ${newFriendName}?`);
		terminal.friendArray.push(
			terminal.CreateFriend(newFriendName, newFriendAge),
		);
		terminal.friendNameList.push(" " + newFriendName);
		alert(
			`You have added ${newFriendName}, age ${newFriendAge} to the list!`,
		);
	},
	editFriends: function () {
		let friendToEdit = prompt("Which friend would you like to edit?");
		let attributeToEdit = prompt(
			"Which attribute would you like to edit?: name, age, fun",
		);
		for (let i = 0; i < terminal.friendArray.length; i++) {
			if (terminal.friendArray) {
			}
	},
	removeFriends: function () {
		var removedFriend = prompt(
			"Please enter the name to be removed from the list:",
		);
		for (let i = 0; i < terminal.friendArray.length; i++) {
			if (terminal.friendArray[i].name == removedFriend) {
				terminal.friendArray.splice(i, 1);
				alert(`You have removed ${removedFriend} from the list!`);
			}
		}
	},
	viewFriends: function () {
		let viewedFriend = prompt(
			"Please enter the name of the plushie you wish to know more about:",
		);
		for (let i = 0; i < terminal.friendArray.length; i++) {
			if (terminal.friendArray[i].name == viewedFriend) {
				viewedFriend = terminal.friendArray[i];
				if (typeof viewedFriend.age == "undefined") {
					viewedFriend.age = prompt(
						"Your friend doesn't have an age listed! Please add one now.",
					);
				} else {
					alert(
						`Your friend ${viewedFriend.name} is ${viewedFriend.age} years old, what an adventure it's been!`,
					);
				}
			}
		}
	},
};

while (terminal.loop) {
	terminal.response = prompt(
		"Please enter a command (list add remove view quit):",
	);
	switch (terminal.response) {
		case "list":
			terminal.listFriends();
			break;
		case "add":
			terminal.addFriends();
			break;
		case "edit":
			terminal.editFriends();
			break;
		case "remove":
			terminal.removeFriends();
			break;
		case "view":
			terminal.viewFriends();
			break;
		case "quit":
			terminal.loop = false;
			break;
		default:
			alert("Error, invalid command.");
	}
}
