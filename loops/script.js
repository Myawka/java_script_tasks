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
