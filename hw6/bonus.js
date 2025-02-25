function fetchUrl(url, attempts = 5) {
	return new Promise((resolve, reject) => {
		function attemptFetch(remainingAttempts) {
			fetch(url)
				.then((response) => {
					if (!response.ok) {
						throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
					}
					return response.json();
				})
				.then((data) => resolve(data))
				.catch((error) => {
					if (remainingAttempts > 1) {
						console.warn(
							`Попытка не удалась. Пробуем снова... (${
								attempts - remainingAttempts + 1
							})`
						);
						attemptFetch(remainingAttempts - 1);
					} else {
						reject(`Ошибка после ${attempts} попыток: ${error.message}`);
					}
				});
		}

		attemptFetch(attempts);
	});
}

// Правильный вариант
fetchUrl('https://jsonplaceholder.typicode.com/posts/1')
	.then((data) => console.log('Данные получены:', data))
	.catch((err) => console.error('Произошла ошибка:', err));

/* 
Данные получены: {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
*/

// Неправильный вариант
fetchUrl('https://jsonplaceholder.typicode.com/invalid-endpoint')
	.then((data) => console.log('Данные получены:', data))
	.catch((err) => console.error('Произошла ошибка:', err));

/* 
Попытка не удалась. Пробуем снова... (1)
Попытка не удалась. Пробуем снова... (2)
Попытка не удалась. Пробуем снова... (3)
Попытка не удалась. Пробуем снова... (4)
Произошла ошибка: Ошибка после 5 попыток: Ошибка HTTP! Статус: 404
*/
