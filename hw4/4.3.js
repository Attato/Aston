// === Задание 4.3: Queue (очередь) ===

// - Реализуйте очередь с использованием массива.

const createQueue = () => {
	let queue = [];

	return {
		isEmpty: () => queue.length === 0,
		enqueue: (element) => {
			queue = [...queue, element];
		},
		dequeue: () => {
			if (queue.length === 0) return null;
			const removedElement = queue[0];
			queue = queue.slice(1);
			return removedElement;
		},
		peek: () => (queue.length === 0 ? null : queue[0]),
		length: () => queue.length,
		show: () => [...queue],
	};
};

// ---- Пример использования ----

const queue = createQueue();

console.log('Очередь на кассе:');

queue.enqueue('Покупатель 1');
queue.enqueue('Покупатель 2');
queue.enqueue('Покупатель 3');

console.log('Очередь:', queue.show()); // ["Покупатель 1", "Покупатель 2", "Покупатель 3"]

// Обслуживаем первого покупателя
let served = queue.dequeue();
console.log(`Обслужили: ${served}`); // Покупатель 1
console.log('Очередь после обслуживания:', queue.show()); // ["Покупатель 2", "Покупатель 3"]

// Добавляем нового покупателя
queue.enqueue('Покупатель 4');
console.log('Очередь после добавления:', queue.show()); // ["Покупатель 2", "Покупатель 3", "Покупатель 4"]

// Обслуживаем ещё одного покупателя
served = queue.dequeue();
console.log(`Обслужили: ${served}`); // Покупатель 2
console.log('Очередь после обслуживания:', queue.show()); // ["Покупатель 3", "Покупатель 4"]

console.log('Следующий на кассе:', queue.peek()); // Покупатель 3
console.log('Размер очереди:', queue.length()); // 2
