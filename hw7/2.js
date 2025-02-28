for (var i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
} // 3 3 3

// var создаёт одну переменную i, которую переиспользует весь цикл

for (let i = 0; i < 3; i++) {
	setTimeout(() => console.log(i), 1);
} // 0 1 2

// let создаёт новую переменную i на каждой итерации
