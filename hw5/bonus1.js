function Person(name) {
	let _name = name;

	this.getName = function () {
		return _name;
	};

	this.setName = function (newName) {
		_name = newName;
	};
}

const person = new Person('Дима');
console.log(person.getName()); // Дима

person.setName('Миша');
console.log(person.getName()); // Миша
