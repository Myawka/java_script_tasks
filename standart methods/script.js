//184_1
console.log('Результат задания 184 №1:');
console.log (Math.pow(2,10));

//184_2
console.log('Результат задания 184 №2:');
console.log (Math.sqrt(245));

//184_3
console.log('Результат задания 184 №3:');
let arr184_3 = [4, 2, 5, 19, 13, 0, 10];
let sum184_3 = 0;
for(let elem184_3 of arr184_3){
	sum184_3 = sum184_3 + Math.pow(elem184_3,3);
}
console.log(Math.sqrt(sum184_3));

//185_1
console.log('Результат задания 185 №1:');
let num185_1 = Math.sqrt(379);
console.log(Math.round(num185_1));
console.log(num185_1.toFixed(1));
console.log(num185_1.toFixed(2));

//185_2
console.log('Результат задания 185 №2:');
let num185_2 = Math.sqrt(587);
let floor185_2 = Math.floor(num185_2);
let ceil185_2 = Math.ceil(num185_2);
console.log(floor185_2, ceil185_2);

//186_1
console.log('Результат задания 186 №1:');
console.log('Максимальное число: ' + (Math.max(4, -2, 5, 19, -130, 0, 10)));
console.log('Минимальное число: ' + Math.min(4, -2, 5, 19, -130, 0, 10));

//187_1
console.log('Результат задания 187 №1:');
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

//187_2
console.log('Результат задания 187 №2:');
let arr187_2 = [];
for (let i = 0; i <= 9; i++){
    arr187_2[i] = getRandomInt(55, 100);
}
console.log(arr187_2);

//188_1
console.log('Результат задания 188 №1:');
let a = -500;
let b = 25;
console.log (Math.abs(a-b));

//189_1
console.log('Результат задания 189 №1:');
let str189_1 = 'js';
str189_1 = str189_1.toUpperCase();
console.log(str189_1);

//189_2
console.log('Результат задания 189 №2:');
let str189_2 = 'JS';
str189_2 = str189_2.toLowerCase();
console.log(str189_2);

//190_1
console.log('Результат задания 190 №1:');
let str = 'я учу javascript';
let word190_1 = str.substr(2, 3); 
let word190_2 = str.substr(6, 10);
console.log('Метод substr: ' + (word190_1));
console.log('Метод substr: ' + (word190_2));

word190_1 = str.substring(2, 5);
word190_2 = str.substring(6, 16);
console.log('Метод substring: ' + (word190_1));
console.log('Метод substring: ' + (word190_2));

word190_1 = str.slice(2, 5); 
word190_2 = str.slice(6, 16);
console.log('Метод subslice: ' + (word190_1));
console.log('Метод subslice: ' + (word190_2));

//191_1
console.log('Результат задания 191 №1:');
let str191_1 = "file:///D:/javascript_tasks_kate/STANDARD_METHODS/tasks%23184-198/kate_tasks%23184-198.html";
let res191_1 = str191_1.startsWith('https://');
console.log(res191_1);

//191_2
console.log('Результат задания 191 №2:');
let str191_2 = "file:///D:/javascript_tasks_kate/STANDARD_METHODS/tasks%23184-198/kate_tasks%23184-198.html";
let res191_2 = str191_2.endsWith('.html');
console.log(res191_2);

