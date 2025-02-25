let a = 5;

console.log(a);
// Синхронный код — сразу выведет 5

setTimeout(() => {
	console.log(a);
	// Выведет актуальное значение переменной a на момент выполнения (15)
	a = 10;
	// После вывода изменяет a на 10
}, 0);

Promise.resolve().then(() => {
	console.log(a);
	// Выведет текущее значение a (5)
	a = 15;
	// Изменяет a на 15
});

console.log(a);
// Синхронный код — снова выведет 5

/* Результат: 
5
5
5
15 
*/
