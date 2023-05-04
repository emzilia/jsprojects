"use strict";

function Calculator() {
	this.read = function () {
		this.a = +prompt("Enter 1st value:");
		this.b = +prompt("Enter 2nd value:");
	};
	this.sum = function () {
		return this.a + this.b;
	};
	this.mul = function () {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

console.log("Sum: " + calculator.sum());
console.log("Mul: " + calculator.mul());
