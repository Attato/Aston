setTimeout(() => console.log('a'));
// Макротаска — выполнится в последнюю очередь

Promise.resolve()
	.then((first) => {
		console.log('first:', first);
		// first будет undefined, так как Promise.resolve() ничего не передает
		return 'b'; // Возвращаем 'b' для следующего then
	})
	.then(() => {
		return Promise.resolve().then((second) => {
			console.log('second:', second);
			// second также будет undefined
			return 'c'; // Возвращаем 'c' для следующего then
		});
	})
	.then((third) => console.log('third:', third));
// third будет 'c'

console.log('d');
// Синхронный код — выполнится сразу

/* Результат: 
d
first: undefined
second: undefined
third: c
a
*/
