'use strict';

function Pet() {
	let name;
	let gender;
	let legs;

	const createPet = function (petName) {
		let newPet = new Pet();
		newPet.name = petName;
		return newPet;
	};

	const getName = function () {
		return this.name;
	};

	const setName = function (newName) {
		this.name = newName;
	};

	const getGender = function () {
		return this.gender;
	};

	const setGender = function (newGender) {
		this.gender = newGender;
	};

	const getLegs = function () {
		return this.legs;
	};

	const setLegs = function (newLegsNumber) {
		this.legs = newLegsNumber;
	};

	return {
		name,
		gender,
		legs,
		createPet,
		getName,
		setName,
		getGender,
		setGender,
		getLegs,
		setLegs
	};
}
