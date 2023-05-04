"use strict";

function UserCreate(name, surname, age) {
	this.name = name;
	this.surname = surname;
	this.age = age;
	console.log(this);
}

function usersToAdd() {
	let response = +prompt("How many users to add to the system?");
	response = checkInt(response);
	while (+response > 0) {
		response -= 1;
		getProps();
	}
}

function getProps() {
	let nameInput = prompt("Please enter the user's first name:");
	nameInput = checkString(nameInput);
	let surnameInput = prompt("Please enter the user's surname:");
	surnameInput = checkString(surnameInput);
	let ageInput = +prompt("Please enter the user's age:");
	ageInput = checkInt(ageInput);
	let pushedInput = new UserCreate(nameInput, surnameInput, ageInput);
	allUsers.push(pushedInput);
}

function checkString(input) {
	if (+input > 0 || input == null) {
		alert("Error, invalid value, please retry.");
		input = prompt("Please re-enter the requested value.");
		input = checkString(input);
	}
	return input;
}

function checkInt(input) {
	if (input == input && input > 0) {
		return input;
	}
	alert("Error, invalid value, please retry.");
	input = +prompt("Please re-enter the requested value.");
	input = checkInt(input);
	if (input == input) {
		return input;
	}
}

let allUsers = [];
usersToAdd();
//console.log(allUsers);

for (let i = 0; i < allUsers.length; i++) {
	console.log(allUsers[i]);
}
