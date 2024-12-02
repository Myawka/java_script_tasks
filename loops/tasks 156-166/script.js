//156_1
let str156_1 = "" ;
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
        str156_1 += i
	}
}
console.log('Результат задания 156 №1: ' + str156_1);

//156_2
let str156_2 = "" ;
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
        str156_2 += String(i) + String(j) + ' ';
	} 
}
console.log('Результат задания 156 №2: ' + str156_2);

//159_1
let arr159_1 = [];
for (let i = 1; i <= 10; i++) {
	arr159_1.push(i);
}

console.log('Результат задания 159 №1: ' + arr159_1);

//159_2
let arr159_2 = [];
for (let i = 1; i <= 10; i++) {
	arr159_2.push('x');
}
console.log('Результат задания 159 №2: ' + arr159_2);

//159_3
let arr159_3 = [-5, 15, 4, 10, -1, -5];
let arr159_4 = [];
for (let elem159_3 of arr159_3) {
    if (elem159_3 >= 0){
	    arr159_4.push(elem159_3);
    }
}
console.log('Результат задания 159 №3: ' + arr159_4);

