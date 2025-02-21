class A {
	constructor() {}

	arrFunc = () => {
		console.log('wtf', this === i);
	};
}

var i = new A();
i.arrFunc(); // wtf true

// Стрелочные функции не создают своё собственное this, вместо этого они берут this из места, где они были созданы.
// Когда мы вызываем i.arrFunc(), стрелочная функция смотрит на тот this, который был в момент её создания, а это как раз i.
// Поэтому this === i выводит true.

console.log(i.hasOwnProperty('arrFunc')); // true, потому что arrFunc находится внутри i
