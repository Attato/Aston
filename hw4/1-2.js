// === Задание 1: Почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ? ===

// Массивы в js являются неправильными потому что могут хранить в себе разные типы данных и имеют динамический размер.
// Массивы совмещают в себе несколько структур данных, такие как: стек, очередь, двусторонняя очередь и упорядоченный список.

// === Задание 2: Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply) ===

function logger() {
	console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

//bind
const boundLogger = logger.bind(obj);
console.log('Using bind:');
boundLogger();

//call
console.log('Using call:');
logger.call(obj);

//apply
console.log('Using apply:');
logger.apply(obj);
