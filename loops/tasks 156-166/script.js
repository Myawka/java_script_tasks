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

//161 _1
console.log('Результат задания 161 №1:');
let arr161 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr161_1 = [1, 2, 3, 4, 5, 6, 7];
let obj161_1 = {};
for (let i = 0; i < arr161.length; i++) {
	obj161_1[arr161[i]] = arr161_1[i];
}
console.log(obj161_1);

//161_2
console.log('Результат задания 161 №2:');
let obj161_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let arr161_2 = []
for (let key161_2 in obj161_2){
    if ( obj161_2[key161_2] % 2 == 0){
        arr161_2[key161_2] = obj161_2[key161_2];
    }
}
console.log(arr161_2);

//161_3
console.log('Результат задания 161 №3:');
let obj161_3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let arr161_3 = {};
for (let key161_3 in obj161_3) {
    arr161_3[obj161_3[key161_3]] = key161_3;
}
console.log(arr161_3);

//162_1
console.log('Результат задания 162 №1:');
let obj162_1 = {x: 1, y: 2, z: 3};
for ( let i in obj162_1){
    obj162_1[i] = obj162_1[i] ** 2;
}
console.log(obj162_1)

//162_2
console.log('Результат задания 162 №2:');
let obj162_2 = {x: 1, y: 2, z: 3};
for ( let i in obj162_2){
    obj162_2[i] +=  1;
}
console.log(obj162_2)

//163_1
let arr163_1 = ['a', 'b', 'c', 'd', 'e'];
let flag163_1 = false;
for (let elem163_1 of arr163_1) {
	if (elem163_1 == 'c') {
		flag163_1 = true;
		break;
	}
}
if (flag163_1 === true) {
	console.log('В этом массиве есть элемент c? Ответ: +++');
} else {
	console.log('В этом массиве есть элемент c? Ответ: ---');
}

//163_2
let task163_2 = 125;
let flag163_2 = true;
for (let i = 2; i <= Math.sqrt(task163_2); i++) {
    if (task163_2 % i === 0) { 
        flag163_2 = false;
        break;
    }
}
if (flag163_2 === true) {
    console.log('Результат задания 163 №2: Число ' + task163_2 + ' простое');
} else {
    console.log('Результат задания 163 №2: Число ' + task163_2 + ' составное');
}

