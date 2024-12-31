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

//192_1
console.log('Результат задания 192 №1:');
let str192_1 = '1-2-3-4-5';
while (str192_1.includes('-')) {
	str192_1 = str192_1.replace('-', '.');
}
console.log(str192_1);

//193_1
console.log('Результат задания 193 №1:');
let str193_1 = '1-2-3-4-5';
let arr193_1 = str193_1.split('-');
console.log(arr193_1);

//193_2
console.log('Результат задания 193 №2:');
let str193_2 = '12345'
let arr193_2 = str193_2.split('');
console.log(arr193_2);

//193_3
console.log('Результат задания 193 №3:');
let arr193_3= [1, 2, 3, 4, 5];
let str193_3 = arr193_3.join('-');
console.log(str193_3);

//194_1
console.log('Результат задания 194 №1:');
let arr194_1 = [1, 2, 3];
let elem = arr194_1.shift();
console.log(elem);

//194_2
console.log('Результат задания 194 №2:');
let arr194_2 = [1, 2, 3];
let del = arr194_2.pop();
console.log(del);

//194_3
console.log('Результат задания 194 №3:');
let arr194_3 = [1, 2, 3];
arr194_3.push(4, 5, 6);
console.log(arr194_3);

//194_4
console.log('Результат задания 194 №4:');
let arr194_4 = [1, 2, 3];
arr194_4.unshift(4, 5, 6);
console.log(arr194_4);

//195_1
console.log('Результат задания 195 №1:');
let arr195_1 = [1, 2, 3, 4, 5];
let sub195_1 = arr195_1.slice(0, 3);
console.log(sub195_1);

//195_2
console.log('Результат задания 195 №2:');
let arr195_2 = [1, 2, 3, 4, 5];
let sub195_2 = arr195_2.slice(3);
console.log(sub195_2);

//196_1
console.log('Результат задания 196 №1:');
let arr196_1 = [1, 2, 3, 4, 5];
arr196_1.splice(1, 2);
console.log(arr196_1);

//196_2
console.log('Результат задания 196 №2:');
let arr196_2 = [1, 2, 3, 4, 5];
arr196_2.splice(3, 0,'a', 'b', 'c');
console.log(arr196_2);

//196_3
console.log('Результат задания 196 №3:');
let arr196_3 = [1, 2, 3, 4, 5];
arr196_3.splice(2, 0, 'a', 'b');
arr196_3.splice(6, 0, 'c');
arr196_3.splice(8, 0, 'e');
console.log(arr196_3);