// === Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов ===

const deepEqual = (a, b) => {
	if (a === b) return true;
	if (
		typeof a !== 'object' ||
		typeof b !== 'object' ||
		a === null ||
		b === null
	)
		return false;

	const keysA = Object.keys(a),
		keysB = Object.keys(b);
	if (keysA.length !== keysB.length) return false;

	return keysA.every((key) => deepEqual(a[key], b[key]));
};

const obj1 = { here: { is: 'on', other: '3' }, object: 5 };
const obj2 = { here: { is: 'on', other: '2' }, object: 5 };

console.log(deepEqual(obj1, obj2));

// === Бонус Задание 2 – Развернуть строку в обратном направлении при помощи методов массивов ===

const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString('яблоко'));
