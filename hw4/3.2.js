// === Задание 3.2 ===

const obj = {
	child: {
		i: 10,
		b: () => console.log(this.i, this),
		c() {
			console.log(this.i, this);
		},
	},
};

obj.child.b(); // undefined {}
obj.child.c(); // 10 { i: 10, b: [Function: b], c: [Function: c] }
// Потому что c() — это обычная функция, а у обычных функций this указывает на объект, перед точкой. В данном случае это obj.child
