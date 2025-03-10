Promise.reject('a') // Промис отклоняется с ошибкой 'a'
	.catch((p) => p + 'b') // Ловим ошибку 'a', добавляем 'b' => 'ab'
	.catch((p) => p + 'c') // Пропускается, так как ошибка уже обработана
	.then((p) => p + 'd') // К 'ab' добавляем 'd' => 'abd'
	.then((p) => p + 'f') // К 'abd' добавляем 'f' => 'abdf'
	.catch((p) => p + 'h') // Пропускается, так как ошибок больше нет
	.finally((p) => p + 'e') // Выполняется всегда, но значение не меняет
	.then((p) => console.log(p)); // Выводим результат: 'abdf'
