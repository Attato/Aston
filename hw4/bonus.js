// Бонус задание: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.myBind = function (context, ...args) {
	const fn = this;
	return function (...newArgs) {
		return fn.apply(context, [...args, ...newArgs]);
	};
};

function describe(action, sound) {
	console.log(`Обезьяна по имени ${this.name} ${action} и говорит "${sound}"`);
}

const monkey = {
	name: 'Чипо',
};

const describeChipo = describe.myBind(monkey);

describeChipo('скачет по деревьям', 'ууу-ааа');
// Обезьяна по имени Чипо скачет по деревьям и говорит "ууу-ааа"

describeChipo('кушает банан', 'ням-ням');
// Обезьяна по имени Чипо кушает банан и говорит "ням-ням"
