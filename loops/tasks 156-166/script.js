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

//164_1
let arr164_1 = [10, 20, 30, 40, 21, 32, 51];
let sum164_1 = 0;
for( let elem164_1 of arr164_1){
    let str164_1 = String(elem164_1);
    if (str164_1[0] == 1 || str164_1[0] == 2){
        sum164_1 += Number(str164_1);
    }
}
console.log('Результат задания 164 №1: ' + sum164_1);

//165_1
let obj165 = { a: 10, b: 20, c: 30, d: 40, e: 50 };
let sum165 = 0;
for (let elem165 in obj165) {
    let str165 = String(obj165[elem165]);
    if (str165[0] === '1' || str165[0] === '2') {
        sum165 += +str165;
    }
}
console.log('Результат задания 165 №1: ' + sum165);

//166_1
console.log('Результат задания 166 №1:');
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
  
//166_2
console.log('Результат задания 166 №2:');
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

//166_3
console.log('Результат задания 166 №3:');
for (let i = 10; i >= 0; i--) {
	console.log(i);
} 

//166_4
console.log('Результат задания 166 №4:');
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//166_5
console.log('Результат задания 166 №5:');
let res166_5 = 0;
for (let i = 1; i <= 10; i++) {
  res166_5 += i;
}
console.log(res166_5);

//166_6
console.log('Результат задания 166 №6:');
let res166_6 = 1;
for (let i = 1; i <= 10; i++) {
  res166_6 *= i;
}
console.log(res166_6);

//166_7
console.log('Результат задания 166 №7:');
let arr166_7 = ['1', '2', '3', '4', '5'];
let sum166_7 = 0;
for (let elem166_7 of arr166_7) {
  sum166_7 += +elem166_7;
}
console.log(sum166_7); 

//166_8
console.log('Результат задания 166 №8:');
let arr166_8 = ['1', '2', '3', '4', '5'];
let sum166_8 = 0;
for (let elem166_8 of arr166_8) {
  sum166_8 += +elem166_8;
}
console.log(sum166_8); 

//166_9
console.log('Результат задания 166 №9:');
let arr166_9 = ['1', '2', '3', '4', '5'];
let sum166_9 = 0;
for (let elem166_9 of arr166_9) {
  sum166_9 += +elem166_9;
}
console.log(sum166_9); 

//166_10
console.log('Результат задания 166 №10:');
let arr166_10 = ['1', '2', '3', '4', '5'];
let sum166_10 = 0;
for (let i = 0; i < arr166_10.length; i++) {
  sum166_10 += +arr166_10[i];
}
console.log(sum166_10); 

//166_11
console.log('Результат задания 166 №11:');
let arr166_11 = ['1', '2', '3', '4', '5'];
let sum166_11 = 0;
for (let i = 0; i < arr166_11.length; i++) {
  sum166_11 += +arr166_11[i];
}
console.log(sum166_11); 

//166_12
console.log('Результат задания 166 №12:');
let arr166_12 = ['1', '2', '3', '4', '5'];
let sum166_12 = 0;
for (let i = 0; i < arr166_12.length; i++) {
  sum166_12 += +arr166_12[i];
}
console.log(sum166_12); // теперь будет выводить 15

//166_13
console.log('Результат задания 166 №13:');
let arr166_13 = [1, 2, 3, 4, 5];
for (let index166_13 in arr166_13) {
  arr166_13[index166_13] = arr166_13[index166_13] ** 2;
}
console.log(arr166_13);

//166_14
console.log('Результат задания 166 №14:');
let arr166_14 = [];
for (let i = 1; i <= 5; i++) {
  arr166_14.push(i);
}
console.log(arr166_14);

//166_15
console.log('Результат задания 166 №15:');
let obj166_15 = {a: 1, b: 2, c: 3};
let sum166_15 = 0;
for (let key166_15 in obj166_15) {
  sum166_15 += obj166_15[key166_15];
}
console.log(sum166_15);

//166_16
console.log('Результат задания 166 №16:');
let obj166_16 = {a: 1, b: 2, c: 3};
let sum166_16 = 0;
for (let key166_16 in obj166_16) {
  sum166_16 += obj166_16[key166_16];
}
console.log(sum166_16);

//166_17
console.log('Результат задания 166 №17:');
let arr166_17 = [1, 2, 3, 4, 5];
let res166_17 = false;
for (let elem166_17 of arr166_17) {
    if (elem166_17 === 3) {
        res166_17 = true;
        break;
    }
}
console.log(res166_17);

//166_18
console.log('Результат задания 166 №18:');
let arr166_18 = [];
for (let i = 1; i <= 5; i++) {
    arr166_18.push(i);
}
console.log(arr166_18);

//166_19
console.log('Результат задания 166 №19:');
let arr166_19 = [1, 2, 3, 4, 5];
let res166_19 = false;
for (let elem166_19 of arr166_19) {
    if (elem166_19 === 3) {
        res166_19 = true;
        break;
    }
}
console.log(res166_19);

//166_20
console.log('Результат задания 166 №20:');
let arr166_20 = [1, 2, 3, 4, 5];
for (let elem166_20 of arr166_20) {
    if (elem166_20 % 2 === 0) {
        console.log(elem166_20);
    }
}

//166_21
console.log('Результат задания 166 №21:');
let arr166_21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res166_21 = [];

for (let elem166_21 of arr166_21) {
    if (elem166_21 % 2 !== 0) {
        res166_21.push(elem166_21);
    }
}
console.log(res166_21);