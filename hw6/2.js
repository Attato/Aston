console.log('1');

setTimeout(() => console.log('2'), 1);

let promise = new Promise((resolve) => {
	console.log('3');
	resolve();
});

promise.then(() => console.log('4'));

setTimeout(() => console.log('5'));

console.log('6');

// В Event Loop сначала выполняется синхронный код

/*
    console.log('1');

    let promise = new Promise((resolve) => {
        console.log('3');
        resolve();
    });

    console.log('6');


    Результат: 1, 3, 6
*/

// Затем выполняются микротаски

/*
    promise.then(() => console.log('4'));

    Результат: 1, 3, 6, 4
*/

// После чего выполняются макротаски

/*
    setTimeout(() => console.log('2'), 1);
    setTimeout(() => console.log('5'));

    Результат: 1, 3, 6, 4, 2, 5

--------------------------------
Выводится сначала 2, а уже потом 5 из за того, что 2 была добавлена в очередь раньше, чем 5.

Если же повысить задержку, то результат изменится:
setTimeout(() => console.log('2'), 4);
setTimeout(() => console.log('5'));

Результат: 1, 3, 6, 4, 5, 2
--------------------------------
*/

// Итоговый результат: 1, 3, 6, 4, 2, 5
