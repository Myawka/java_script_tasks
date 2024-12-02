//144_1
console.log('Вывод элементов массива 144:');
let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem144 of arr144) {
	console.log(elem144);
}

//145_1
let obj145_1 = {x: 1, y: 2, z: 3};
console.log('Ключи объекта 145_1:'); 
for (let key145_1 in obj145_1) {
	console.log(key145_1); 
}

//145_2
let obj145_2 = {x: 1, y: 2, z: 3};
console.log('Элементы объекта 145_2:'); 
for (let key145_2 in obj145_2) {
	console.log(obj145_2[key145_2]);
}

//146_1
let task146_1 = 1;
while (task146_1 <= 100) {
	console.log(task146_1);
	task146_1++;
}

//146_2
let task146_2 = 11;
while (task146_2 <= 33) {
	console.log(task146_2);
	task146_2++;
}

//146_3
let num146_3 = 250;
let task146_3 = 0;
while (num146_3 <= 1000) {
	num146_3 = num146_3 * 3;
	task146_3 = task146_3+1;
}
console.log('Число, полученное в результате умножение: ' + num146_3);
console.log('Количество итераций,затраченных для этого: ' + task146_3);

//147_1
for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

//147_2
for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

//147_3
for (let i = 0; i <= 100; i= i+2) {
	console.log(i); 
}

//147_4
for (let i = 1; i <= 100; i= i+2) {
	console.log(i); 
}

//147_5
for (let i = 100; i >= 0; i--) {
	console.log(i); 
}

//148_1
let arr148_1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr148_1.length; i++) {
	console.log(arr148_1[i]);
}

//148_2
let arr148_2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < arr148_2.length-1; i++) {
	console.log(arr148_2[i]);
}

//148_3
let arr148_3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr148_3.length-1; i >= 0; i--) {
	console.log(arr148_3[i]);
}

//148_4
let arr148_4 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr148_4.length; i++) {
	console.log(arr148_4[i]);
}

//149_1
let arr149_1 = [2, 5, 9, 15, 1, 4];
for (let elem149_1 of arr149_1) {
	if (elem149_1 > 3 && elem149_1 < 10) {
		console.log('Элементы массива, которые больше 3-х, но меньше 10: ' + elem149_1);
	}
}

//149_2
let obj149_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key149_2 in obj149_2) {
	if (obj149_2[key149_2] % 2 !== 0) {
		console.log('Нечетные числа: ' + obj149_2[key149_2]);
	}
}

//150_1
let res150_1 = 0;
for (let elem150_1 = 2; elem150_1 <= 100; elem150_1+= 2) {
	    res150_1 += elem150_1;
}
console.log('Сумма четных чисел от 2 до 100: ' + res150_1);

//150_2
let res150_2 = 0;
for (let elem150_2 = 1; elem150_2 < 100; elem150_2 += 2) {
	    res150_2 += elem150_2;
}
console.log('Сумма нечетных чисел от 1 до 99: ' + res150_2);

//150_3
let res150_3 = 1;
for (let elem150_3 = 1; elem150_3 <= 20; elem150_3 ++) {
	    res150_3 *= elem150_3;
}
console.log('Произведение целых чисел от 1 до 20: ' + res150_3);

//151_1
let arr151_1 = [2, 5, 9, 3, 1, 4];
let res151_1 = 0;
for (let elem151_1 of arr151_1) {
	res151_1 += elem151_1;
}
console.log('Результат задания 151 №1: ' + res151_1);

//151_2
let arr151_2 = [2, 5, 9, 3, 1, 4];
let result151_2 = 0;
for (let elem151_2 of arr151_2) {
    if (elem151_2 % 2 == 0){
        result151_2 += elem151_2;
    }
}
console.log('Результат задания 151 №2: ' + result151_2);

//151_3
let arr151_3 = [2, 5, 9, 3, 1, 4];
let res151_3 = 0;
for (let elem151_3 of arr151_3) {
    res151_3 += (elem151_3 ** 2);
}
console.log('Результат задания 151 №3: ' + res151_3);

//151_4
let arr151_4 = [2, 5, 9, 3, 1, 4];
let res151_4 = 1;
for (let elem151_4 of arr151_4) {
    res151_4 *= elem151_4;
}
console.log('Результат задания 151 №4: ' + res151_4);

//152_1
let str152_1 = '';
for (let i = 1; i <= 5; i++) {
	str152_1 += "-";
}
console.log('Результат задания 152 №1: ' + str152_1); 

//152_2
let str152_2 = '';
for (let i = 1; i <= 9; i++) {
	str152_2 += i;
}
console.log('Результат задания 152 №2: ' + str152_2); 

//152_3
let str152_3 = '';
for (let i = 9; i > 0; i--) {
	str152_3 += i;
}
console.log('Результат задания 152 №3: ' + str152_3); 

//152_4
let str152_4 = '-';
for (let i = 1; i < 10; i++) {
	str152_4 += i + "-";
}
console.log('Результат задания 152 №4: ' + str152_4);