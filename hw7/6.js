var a = 1;
var b = 2;

(function () {
	var b = 3; // локальная b
	a += b; // 1 + 3 = 4
})();

console.log(a); // 4
console.log(b); // 2 (глобальная b)
