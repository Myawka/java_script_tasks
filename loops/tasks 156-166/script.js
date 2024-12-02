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

//160_1
let arr160_1 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr160_1.length; i++) {
	arr160_1[i] = arr160_1[i] ** 2;
}
console.log('Результат задания 160 №1: ' + arr160_1); 

//160_2
let arr160_2 = [14, 15, 16, 17, 18];
for (let i = 0; i < arr160_2.length; i++) {
	arr160_2[i]--;
}
console.log('Результат задания 160 №2: ' + arr160_2); 

//160 _3
let arr160_3 = [14, 15, 16, 17, 18];
for (let i = 0; i < arr160_3.length; i++) {
	arr160_3[i] += 10;
}
console.log('Результат задания 160 №3: ' + arr160_3); 

