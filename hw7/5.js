const user = {
	name: 'Bob',
	funcFunc() {
		return function () {
			console.log(this);
		};
	},
	funcArrow() {
		return () => {
			console.log(this);
		};
	},
	arrowFunc: () => {
		return function () {
			console.log(this);
		};
	},
	arrowArrow: () => {
		return () => {
			console.log(this);
		};
	},
};

user.funcFunc()();
// window или undefined

user.funcArrow()();
// user

user.arrowFunc()();
// window или undefined

user.arrowArrow()();
// window или undefined
