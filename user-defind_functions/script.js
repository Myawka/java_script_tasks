//200_1
console.log('Результат задания 200 №1:');
function func() {
	console.log('Myavka');
}
func();

//200_2
console.log('Результат задания 200 №2:');
function res200_2() {
	let sum200_2 = 0;
	for(let i = 1; i <= 100; i++){		
		sum200_2 += i;
	}
  console.log(sum200_2);
}
res200_2();

//201_1
console.log('Результат задания 201 №1:');
function cub(num201_1) {
	console.log(num201_1 ** 3);
}
cub(5);

//201_2
console.log('Результат задания 201 №2:');
function positive_or_negative(num201_2) {
	if (num201_2 < 0){
		console.log('---');	
	}
	else {
		console.log ('+++')
	};
}
positive_or_negative(5);
positive_or_negative(-5);

//202_1
console.log('Результат задания 202 №1:');
function sum202(num202_1, num202_2, num202_3) {
	console.log(num202_1 + num202_2 + num202_3);
}
sum202(5,10,15);

//203_1
console.log('Результат задания 203 №1:');
function sum203(num203_1, num203_2, num203_3) {
	console.log(num203_1 + num203_2 + num203_3);
}
let param203_1 = 1;
let param203_2 = 2;
let param203_3 = 3;
sum203(param203_1, param203_2, param203_3);

// 204_1
// console.log('Результат задания 204 №1:');
// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2); // Результатом вывода будет : 4
// func(3); // Результатом вывода будет : 9
// func();  // Результатом вывода будет : 25

// 204_2
// console.log('Результат задания 204 №2:');
// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3); // Результатом вывода будет : 5
// func(3); // Результатом вывода будет : 3
// func();  // Результатом вывода будет : 0

//205_1
console.log('Результат задания 205 №1:');
function func205_1(num205_1) {
	return num205_1 ** 3;
}
let res205_1 = func205_1(3);
console.log(res205_1);

//205_2
console.log('Результат задания 205 №2:');
function func205_2(num205_2) {
	return Math.sqrt(num205_2);
}
let res205_2 = func205_2(3) + func205_2(4);
console.log(res205_2);
