// === Задание 1: Создание workingObject всеми возможными способами ===

// Способ 1: Литералы
const innerObject = {};
const middleArray = [1, 2, 3, innerObject];
const workingObject1 = {
	a: middleArray,
};
console.log('Способ 1:', workingObject1);

// Способ 2: Object.create
const workingObject2 = Object.create(Object.prototype);
workingObject2.a = middleArray;
console.log('Способ 2:', workingObject2);

// Способ 3: Конструктор Object
const workingObject3 = new Object();
workingObject3.a = middleArray;
console.log('Способ 3:', workingObject3);

// Способ 4: Функция-конструктор
function WorkingObject(arr) {
	this.a = arr;
}
const workingObject4 = new WorkingObject(middleArray);
console.log('Способ 4:', workingObject4);

// === Задание 2: Копирование workingObject всеми возможными способами ===

// Способ 1: Поверхностное копирование с Object.assign
const shallowCopy1 = Object.assign({}, workingObject1);
console.log('Копия (Object.assign):', shallowCopy1);

// Способ 2: Поверхностное копирование с Spread оператором
const shallowCopy2 = { ...workingObject1 };
console.log('Копия (Spread):', shallowCopy2);

// Способ 3: Глубокое копирование с JSON
const deepCopy = JSON.parse(JSON.stringify(workingObject1));
console.log('Глубокая копия (JSON):', deepCopy);

// Способ 4: Глубокое копирование с structuredClone
const deepCopy2 = structuredClone(workingObject1);
console.log('Глубокая копия (structuredClone):', deepCopy2);

// === Задание 3: Реализация makeCounter всеми возможными способами ===

// Способ 1: Замыкание
function makeCounter1() {
	let count = 0;
	return function () {
		return ++count;
	};
}

const counter1 = makeCounter1();
console.log('makeCounter (Замыкание):', counter1(), counter1());

// Способ 2: Класс
class Counter {
	constructor() {
		this.count = 0;
	}
	increment() {
		return ++this.count;
	}
}

const counter2 = new Counter();
console.log('makeCounter (Класс):', counter2.increment(), counter2.increment());

// Способ 3: Стрелочная функция
const makeCounter3 = () => {
	let count = 0;
	return () => ++count;
};

const counter3 = makeCounter3();
console.log('makeCounter (Стрелочная функция):', counter3(), counter3());
