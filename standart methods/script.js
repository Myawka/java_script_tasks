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