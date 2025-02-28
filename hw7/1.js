// Реализация метода some
function customSome(array, callback) {
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i], i, array)) {
			return true;
		}
	}
	return false;
}

// Реализация метода reduce
function customReduce(array, callback, initialValue) {
	let accumulator = initialValue !== undefined ? initialValue : array[0];
	let startIndex = initialValue !== undefined ? 0 : 1;

	for (let i = startIndex; i < array.length; i++) {
		accumulator = callback(accumulator, array[i], i, array);
	}
	return accumulator;
}

// Реализация метода map
function customMap(array, callback) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i], i, array));
	}
	return result;
}

const testArray = [1, 2, 3, 4, 5];

console.log(
	'customSome:',
	customSome(testArray, (num) => num > 3)
); // true

console.log(
	'customReduce:',
	customReduce(testArray, (acc, num) => acc + num, 0)
); // 15

console.log(
	'customMap:',
	customMap(testArray, (num) => num * 2)
); // [2, 4, 6, 8, 10]
