//51_1
// let test = Boolean(3);
// alert(test)
// Результат = true

//51_2
// let test = Boolean(0);
// alert(test)
// Результат = false

//51_3
// let test = Boolean(-1);
// alert(test)
// Результат = true

//51_4
// let test = Boolean(-0);
// alert(test)
// Результат = false

//51_5
// let test = Boolean(+0);
// alert(test)
// Результат в= false

//51_6
// let test = Boolean('abc');
// alert(test)
// Результат = true

//51_7
// let test = Boolean('');
// alert(test)
// Результат = false

//51_8
// let test = Boolean('0');
// alert(test)
// Результат = true

//51_9
// let test = Boolean(true);
// alert(test)
// Результат = true

//51_0
// let test = Boolean(false);
// alert(test)
// Результат = false

//51_11
// let test = Boolean('true');
// alert(test)
// Результат = true

//51_12
// let test = Boolean('false');
// alert(test)
// Результат = true

//51_13
// let test = Boolean(null);
// alert(test)
// Результат = false

//51_14
// let test = Boolean('null');
// alert(test)
// Результат = true

//51_15
// let test = Boolean(undefined);
// alert(test)
// Результат = false

//51_16
// let test = Boolean('undefined');
// alert(test)
// Результат = true

//51_17
// let test = Boolean(NaN);
// alert(test);
// Результат = false

//51_18
// let test = Boolean('NaN');
// alert(test);
// Результат  = true

//51_19
// let test = Boolean(3 * 'abc');
// alert(test);
// Результат  = false

//51_20
// let test = Boolean(Infinity);
// alert(test); 
// Результат  = true

//51_21
//let test = Boolean(1 / 0);
// alert(test);
// Результат = true

//52_1
let str52_1 = 'abcde';
alert(str52_1[0]); 
alert(str52_1[2]); 
alert(str52_1[4]); 

//52_2
let str52_2 = 'abcde';
alert(str52_2[4]); 
alert(str52_2[3]); 
alert(str52_2[2]); 
alert(str52_2[1]); 
alert(str52_2[0]);

//52_3
let str52_3 = 'abcde';
let num = 3; 
alert(str52_3[num]);

//54_1
let str54_1 = 'malificenta';
alert(str54_1[str54_1.length - 1]);

//54_2
let str54_2 = 'malificenta';
alert(str54_2[str54_2.length - 2]);

//4_3
let str54_3 = 'malificenta';
alert(str54_3[str54_3.length - 3]);

//55_1
let task55 = '12345'; 
alert(Number(task55[0]) + Number(task55[1]) + Number(task55[2]) + Number(task55[3]) + Number(task55[4]));

//56_1
let task56_1 = String(12345);
alert(Number(task56_1[0]) * Number(task56_1[1]) * Number(task56_1[2]) * Number(task56_1[3]) * Number(task56_1[4]));

//56_2
let task56_2 = String(12345);
alert(Number(task56_2[0]) * Number(task56_2[1]) * Number(task56_2[2]) * Number(task56_2[3]) * Number(task56_2[4])); 

// Задание 56_3
let task56_3 = String(12345);
alert(Number(task56_3[4])); 
alert(Number(task56_3[3])); 
alert(Number(task56_3[2])); 
alert(Number(task56_3[1])); 
alert(Number(task56_3[0]));

//57_1
//let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num);
// Результат = 3

//57_2
// let num = 1;
// num = num + 2;
// num = num + 3;
// alert(num);
// Результат = 6

//58_1
let num58 = 47;
num58 += 7;
num58 -= 18;
num58 *= 10;
num58 /= 15;
alert(num58);

// Задание 59 №1
let num59 = 10;
num59 ++;
num59 ++;
num59 --;
alert(num59);

//60_1
// let num = 3;
// alert(++num);
// Результат выведния будет = 4

//60_2
// let num = 3;
// alert(num++);
// Результат выведния будет = 3

//60_3
// let num = 3;
// alert(--num);
// Результат выведния будет = 2

//60_4
// let num = 3;
// alert(num--);
// Результат выведния будет = 3

//60_5
// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// 1 результат выведния будет = 4
// alert(num2);
// 2 результат выведния будет = 4

//60_6
// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// 1 результат выведния будет = 4
// alert(num2);
// 2 результат выведния будет = 3

//60_7
// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// 1 результат выведния будет = 2
// alert(num2);
// 2 результат выведния будет = 2

//60_8
// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// 1 результат выведния будет = 2
// alert(num2);
// 2 результат выведния будет = 3

//60_9
// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// 1 результат выведния будет = 4
// alert(--num2);
// 2 результат выведния будет = 3

//61_1
alert(0.1 * 0.2);

//61_2
alert(0.3 - 0.1);

//62_1
let age = prompt("Ваш возраст?");
alert("Ваш возраст: " + age);

//63_1
let num63_1 = Number(prompt('Введите первое число'));
let num63_2 = Number(prompt('Введите второе число'));

alert(num63_1 + num63_2); // теперь будет складывать числа

//63_2
let side = Number(prompt('Введите сторону квадрата'));
let s = side * side;
alert('Площадь квадрата: ' + s);

//63_3
let length = Number(prompt('Введите длину прямоугольника'));
let width = Number(prompt('Введите ширину прямоугольника'));
let p = 2 * (length + width);
alert('Периметр прямоугольника: ' + p);

//64_1
document.write('Задание 64_1<br>');

//64_2
document.write('<i>Задание 64_2</i> <br>');

//64_3
let str64 = 'Задание 64_3';
document.write('<i>' + str64 + '</i> <br>')

//64_4
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

//65_1
let num65_1 = 1;
let num65_2 = 2;
console.log('сумма: ' + (num65_1 + num65_2));

//65_2
let a65_2 = 1;
let b65_2 = 2;
console.log(a65_2 + b65_2);

//65_3
let num65_3 = '123';
let sum65_3 = Number(num65_3[0]) + Number(num65_3[1]) + Number(num65_3[2]);
console.log(sum65_3);

//65_4
let num65_4 = String(123);
console.log((num65_4[0]));

//65_5
let c65_5 = 0;
console.log(++c65_5);

//65_6
let num65_6 = String(123);
console.log(num65_6.length);

//65_7
let k65_7 = 24 * 60 * 60;
console.log(k65_7);

//65_8
let num65_8 = 123;
let str65_8 = String(num65_8);
console.log(str65_8.length);

//65_9
let num65_9 = 123;
let str65_9 = String(num65_9);
console.log(str65_9[str65_9.length - 1]);

//65_10
let num65_10 = 123;
let str65_10 = String(num65_10);
console.log(str65_10.length);

//65_11
let num65_11 = 123;
let str65_11 = String(num65_11);
console.log(str65_11[str65_11.length - 1]);


//65_12
let a65_12 = '123';
let b65_12 = '456';
let s65_12 = Number(a65_12) + Number(b65_12);
console.log(s65_12);

//65_13
let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);

//66_1
alert("Количество секунд в сутках = " + (24 * 60 * 60));

//66_2
alert("Количество секунд в 30 сутках = " + (30 * 24 * 60 * 60));

//66_3
alert("Количество секунд в году = " + (10 * (1024) ** 3));

//66_4
alert("Количество минут в сутках = " + (24 * 60));

//66_5
alert("Количество минут в году = " + (365 * 24 * 60));

//66_6
alert("Количество байт в мегабайте = " + (1024 * 1024));

//66_7
alert("Количество байт в гигабайте. = " + ((1024) ** 3));

//66_8
alert("Количество байт в 10 гигабайтах = " + (10 * (1024) ** 3));

//66_9
alert("Количество байт в терабайте = " + ((1024) ** 4));

//66_10
alert("Количество килобайт в терабайте = " + ((1024) ** 3));

//67_1
let r67 = 5
const pi = 3.14;
let s67 = pi *(r67)**2;
console.log('S круга = ' + s67);

//67_2
let a67_2 = 4; 
let s67_2 = (a67_2) ** 2; 
console.log('S квадрата = ' + s67_2); 

//67_3
let a67_3 = 4; 
let b67_3 = 6; 
let s67_3 = a67_3 * b67_3; 
console.log('S прямоугольника = ' + s67_3); 

//67_4
let a67_4 = 4; 
let b67_4 = 6; 
let p67_4 = 2 * (a67_4+b67_4); 
console.log('P прямоугольника = ' + p67_4); 

//67_5
let tc67_5 = 25; 
let tf67_5 = (tc67_5 * 9/5) + 32;
console.log('25C в F будет = ' + tf67_5); 

//67_6
let tf67_6 = 77; 
let tc67_6 = (tf67_6 - 32) * 5/9;
console.log('77F в C будет = ' + tc67_6); 