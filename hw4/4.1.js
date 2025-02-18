// === Задание 4.1: Массивы ===

// - Создайте массив чисел и найдите его сумму разными способами.

const numbers = [1, 2, 3, 4, 5];

// Способ 1: Через цикл for
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
	sum1 += numbers[i];
}
console.log('Сумма (for):', sum1);

// Способ 2: Через метод reduce
const sum2 = numbers.reduce((acc, num) => acc + num, 0);
console.log('Сумма (reduce):', sum2);

// Способ 3: Через метод forEach
let sum3 = 0;
numbers.forEach((num) => (sum3 += num));
console.log('Сумма (forEach):', sum3);

// - Создайте массив строк и объедините их в одну строку разными способами.

const words = ['Рыба', 'летит', 'в', 'космос'];

// Способ 1: Через метод join
const sentence1 = words.join(' ');
console.log('Строка (join):', sentence1);

// Способ 2: Через цикл for
let sentence2 = '';
for (let i = 0; i < words.length; i++) {
	sentence2 += words[i] + ' ';
}
sentence2 = sentence2.trim();
console.log('Строка (for):', sentence2);

// Способ 3: Через метод reduce
const sentence3 = words.reduce((acc, word) => acc + ' ' + word);
console.log('Строка (reduce):', sentence3);

// - Найдите максимальный и минимальный элементы в массиве чисел разными способами.

const numbers2 = [4, 10, -3, 7, 15, 0];

// Способ 1: Через Math.max и Math.min с оператором spread
const max1 = Math.max(...numbers2);
const min1 = Math.min(...numbers2);
console.log('Максимум (Math.max):', max1);
console.log('Минимум (Math.min):', min1);

// Способ 2: Через цикл for
let max2 = numbers2[0];
let min2 = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
	if (numbers2[i] > max2) max2 = numbers2[i];
	if (numbers2[i] < min2) min2 = numbers2[i];
}

console.log('Максимум (for):', max2);
console.log('Минимум (for):', min2);

// Способ 3: Через reduce
const max3 = numbers2.reduce(
	(acc, num) => (num > acc ? num : acc),
	numbers2[0]
);

const min3 = numbers2.reduce(
	(acc, num) => (num < acc ? num : acc),
	numbers2[0]
);

console.log('Максимум (reduce):', max3);
console.log('Минимум (reduce):', min3);
