function findPair(arr, total) {
	const seen = new Set();

	for (let num of arr) {
		let complement = total - num;

		if (seen.has(complement)) {
			return [complement, num];
		}

		seen.add(num);
	}

	return null;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;

console.log(findPair(arr, total)); // [6, 7]
