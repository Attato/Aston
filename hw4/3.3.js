// === Задание 3.3 ===

function foo() {
	const x = 10; // Свойство "x" объявлено, но его значение не было прочитано.ts(6133) :)
	return {
		x: 20,
		bar: () => {
			console.log(this.x);
		},
		baz: function () {
			console.log(this.x);
		},
	};
}

const obj1 = foo();

obj1.bar(); // undefined
obj1.baz(); // 20

const obj2 = foo.call({ x: 30 });

let y = obj2.bar;
let z = obj2.baz;

y(); // 30
// Стрелочная функция, замкнула this из foo() → { x: 30 }.

z(); // undefined
// Обычная функция вызвана без контекста

obj2.bar(); // 30
// Стрелочная функция, замкнула this из foo() → { x: 30 }.

// * foo.call влияет только на стрелочные функции внутри foo(), потому что они замыкают this из места, где созданы.
// * Обычные функции используют this в момент вызова.

obj2.baz(); // 20
