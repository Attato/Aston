Promise.resolve(1)
	.then((val) => {
		console.log(val); // 1
		return val + 1;
	})
	.then((val) => {
		console.log(val); // 2
	})
	.then((val) => {
		console.log(val); // undefined (предыдущий then ничего не вернул)
		return Promise.resolve(3).then((val) => {
			console.log(val); // 3
			// ничего не возвращаем, значит следующий then получит undefined
		});
	})
	.then((val) => {
		console.log(val); // undefined
		return Promise.reject(4); // возвращаем 4 для catch
	})
	.catch((val) => {
		console.log(val); // 4

		// ничего не возвращаем, значит следующий then получит undefined
	})
	.finally((val) => {
		console.log(val); // finally не получает аргументов -> val всегда undefined
		return 10; // игнорируется
	})
	.then((val) => {
		console.log(val); // undefined (catch ничего не возвращает)
	});

/* 
Результат:
1
2
undefined
3
undefined
4
undefined
undefined
*/
