// === Задание 4.2: Stack (стек) ===

// - Реализуйте стек с использованием массива.

const createStack = () => {
	let stack = [];

	return {
		isEmpty: () => stack.length === 0,
		push: (element) => {
			stack = [...stack, element];
		},
		pop: () => {
			if (stack.length === 0) return null;
			const removedElement = stack[stack.length - 1];
			stack = stack.slice(0, -1);
			return removedElement;
		},
		peek: () => (stack.length === 0 ? null : stack[stack.length - 1]),
		length: () => stack.length,
		show: () => [...stack],
	};
};

// ---- Пример использования ----

const stack = createStack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log('Стек:', stack.show()); // [10, 20, 30]

console.log('Вершина стека:', stack.peek()); // 30

let removedElement = stack.pop();
console.log('Удалённый элемент:', removedElement); // 30
console.log('Стек после stack.pop():', stack.show()); // [10, 20]

console.log('Размер стека:', stack.length()); // 2
