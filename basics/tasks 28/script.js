//28
let name = "Mavile";
alert(name);

let surname = "Ablyazizova";
alert(surname);

//29_1
let str = "!!!";
alert(str);

//29_2
let a = "java";
let b = "script";
alert(a+b);

//29_3
let c = "hello";
let d = "world";
alert(c+' '+d)

//30
alert('abcdefghijklmnopqrstuvwxyz'.length);

//31
let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str2} bbb ${str2} ccc`;
alert(txt);


//32
let str3 = `a
b
c`; 
alert(str3);

//34
let a34;
alert(a34);

//35
let a35 = null;
alert(a35);

//36
let a36 = true;
let b36 = false;
alert(a36, b36);

//37
let str37 = 'Java';
let str37_1 = 'Script';
alert(str37*str37_1);

//38_1
alert( 10 / 0); 

//38_2
alert(-10 / 0);

//39_1
let num39_1 = 10;
console.log(num39_1);

//39_2
let num39_2 = 5;
let num39_3 = 15;
let num39_4 = 25;
console.log(num39_2, num39_3, num39_4);

//40
console.log(10, 0);
console.log(3.14, 1.0);
console.log('hello');
console.log(true, false);
console.log('A', '!', '*');

//41
alert(mistake);
// script.js:83 Uncaught ReferenceError: mistake is not defined at script.js:83:7

//42
const PI = 3.14;
let r = 5;
alert(2*PI*r);

//43_1
// let a = '5' + '2';
// alert(a);
// Результат = 52

//43_2
// let a = '5' + 2;
// alert(a);
// Результат = 52

//43_3
// let a = 5 + '2';
// alert(a);
// Результат = 52

//43_4
// let a = 5 + 2;
// alert(a);
// Результат = 7

//43_5
// let a = '5' * '2';
// alert(a);
// Результат = 10

//43_6
// let a = '5' - '2';
// alert(a);
// Результат = 3

//43_7
// let a = '5' / '2';
// alert(a);
// Результат = 2,5

//43_8
// let a = '5' % '2';
// alert(a);
// Результат = 1

//43_9
// let a = '5s' * '2';
// alert(a);
// Результат = NaN

//43_10
// let a = '5s' + '2';
// alert(a);
// Результат = 5s2

//43_11
// let a = (-'5') + (-'2');
// alert(a);
// Результат = -7

//43_12
// let a = '5' * 1 + '2' * 1;
// alert(a);
// Результат = 7

//43_13
// let a = '5' * '1' + '2' * '1';
// alert(a);
// Результат = 7

//43_14
// let a = '' + 3 + 1;
// alert(a);
// Результат = 31

//44_1
let a44 = Number('10'); 
let b44 = Number('20'); 
alert(a44 + b44); 

//44_2
// alert( Number('2') + Number('3') );
// Результат = 5

//44_3
// alert( 2 + Number('3') );
// Результат = 5

//44_4
// alert( '2' + Number('3') );
// Результат = 23

//45_1
let a45 = '2';
let b45 = '3';
alert(+a45 + +b45);

//47_1
let a47_1 = parseInt('5px');
let b47_1 = parseInt('6px');
alert(a47_1 + b47_1);

//47_2
let a47_2 = parseFloat('5.5px');
let b47_2 = parseFloat('6.25px');
alert(a47_2 + b47_2);

//47_3
let a47_3 = parseFloat('5.5px');
let b47_3 = parseFloat('6.25px');
alert(a47_3 + b47_3 + 'px');