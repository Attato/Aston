class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Rabbit1 extends Animal {
	constructor(name) {
		super();
		this.name = name;
		this.created = Date.now();
	}
}

class Rabbit2 extends Animal {
	constructor(name) {
		super(name);
		this.created = Date.now();
	}
}

class Rabbit3 extends Animal {
	constructor(name, created) {
		super(name);
		this.created = created;
	}

	static create(name) {
		return new Rabbit3(name, Date.now());
	}
}

let rabbit1 = new Rabbit1('Белый кролик');
let rabbit2 = new Rabbit2('Белый кролик');
let rabbit3 = Rabbit3.create('Белый кролик');

alert(rabbit1.name); // Белый кролик
alert(rabbit2.name); // Белый кролик
alert(rabbit3.name); // Белый кролик
