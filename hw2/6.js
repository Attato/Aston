console.log('B' + 'a' + (1 - 'hello'));
// "hello" — строка, при вычитании числа получается NaN
// "B" + "a" + NaN → "BaNaN"
// Вывод: "BaNaN"

console.log((true && 3) + 'd');
// (true && 3) → 3 (возвращается последнее истинное значение)
// 3 + "d" → "3d"
// Вывод: "3d"

console.log(Boolean(true && 3) + 'd');
// (true && 3) → 3 (число, преобразуется в true при Boolean())
// Boolean(3) → true
// true + "d" → "trued"
// Вывод: "trued"

console.log(NaN + 1);
// NaN + 1 → NaN
// Вывод: NaN

console.log(NaN + 'o');
// NaN + "o" → "NaNo"
// Вывод: "NaNo"

console.log(undefined + 1);
// undefined → NaN
// NaN + 1 → NaN
// Вывод: NaN

console.log(undefined - 1);
// undefined → NaN
// NaN - 1 → NaN
// Вывод: NaN

console.log(null + 1);
// null → 0
// 0 + 1 → 1
// Вывод: 1

console.log(null / 5);
// null → 0
// 0 / 5 → 0
// Вывод: 0

console.log(5 / undefined);
// undefined → NaN
// 5 / NaN → NaN
// Вывод: NaN

console.log(-5 / null);
// null → 0
// -5 / 0 → -Infinity
// Вывод: -Infinity

console.log(null == 0);
// null не преобразуется в 0 при сравнении ==
// Вывод: false

console.log(null == '');
// null не равен пустой строке
// Вывод: false

console.log(null > 0);
// null → 0 при сравнении
// 0 > 0 → false
// Вывод: false

console.log(null >= 0);
// null → 0
// 0 >= 0 → true
// Вывод: true

console.log('foo' + +'bar');
// +'bar' → NaN (попытка приведения строки к числу)
// 'foo' + NaN → "fooNaN"
// Вывод: "fooNaN"

console.log('11' + '1' - 1);
// '11' + '1' → "111"
// "111" - 1 → 110 (строка преобразуется в число)
// Вывод: 110

console.log(typeof Object);
// Object — функция-конструктор
// typeof Object → "function"
// Вывод: "function"

console.log(typeof Math);
// Math — встроенный объект
// typeof Math → "object"
// Вывод: "object"

console.log(new String('foo') == 'foo');
// new String('foo') — объект
// 'foo' — строка (примитив)
// При == объект приводится к строке: 'foo' == 'foo' → true
// Вывод: true

console.log(new String('foo') === 'foo');
// new String('foo') — объект
// 'foo' — строка (примитив)
// === сравнивает без приведения типов, объект !== строка
// Вывод: false
