//92_1
let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1[prop92_1]);

//92_2
let obj92_2 = {x: 1, y: 2, z: 3};

let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);

//93_1
// let key93 = 'x';
// let obj93_1 = {
// [key93]: 1,
// y: 2,
// z: 3
// };

//93_2
// let obj93_2 = {
// 	[key93_1]: 1,
// 	[key93_2]: 2,
// 	[key93_3]: 3
// 	};
// 	let key93_1 = 'x';
// 	let key93_2 = 'y';
// 	let key93_3 = 'z';

//94_1
let obj94 = {x: 1, y: 2, z: 3};
console.log('x' in obj94); //Результат = true
console.log('w' in obj94); //Результат = false 

//95_1
let obj95 = {x: 1, y: 2, z: 3};
delete obj95.x;
console.log('x' in obj95);
//Результат = {y: 2, z: 3}

//96_1
// console.log( typeof {x: 1, y: 2, z: 3} );
// Результат =  object

//96_2
// console.log( typeof {} );
// Результат =  object

//96_3
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );
// Результат =  object

//96_4
// let obj1 = {x: 1, y: 2, z: 3};
// console.log( typeof obj1['x'] ); 
// Результат = number

//97_1
// console.log( typeof {x: 1, y: 2, z: 3} ); 
// Результат вывода = object

//97_2
// console.log( typeof [1, 2, 3] ); 
// Результат вывода = object

//97_3
// let arr1 = [1, 2, 3];
// console.log( typeof arr1 ); 
// Результат = object

//97_4
// let arr2 = [1, 2, 3];
// console.log( typeof arr2[0] ); 
// Результат = number

//97_5
// let arr3 = ['1', '2', '3'];
// console.log( typeof arr3[0] ); 
// Результат = string

//98_1
// console.log( Array.isArray([1, 2, 3]) );
// Результат = true

//98_2
// console.log( Array.isArray({x: 1, y: 2, z: 3}) ); 
// Результат = false

//99_1
// let test = {x: 1, y: 2, z: 3};
// console.log(test);
// Результат = x: 1, y: 2, z: 3} (объект)

//99_2
// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);
// Результат = 1 (примитив)

//99_3
// let test = [1, 2, 3];
// console.log(test);
// Результат = [1, 2, 3] (объект)

//99_4
// let test = [1, 2, 3];
// console.log(test[1]);
// Результат = 2 (примитив)

//99_5
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1);
// Результат = [1, 2, 3] (объект)

//99_6
// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(test1[test2]);
// Результат = 2 (примитив)

//99_7
// Примитивные типы данных в JS:
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES11)

//100_1
//let arr1 = [1, 2, 3];
//let arr2 = arr1;
//arr1[0] = 'a';
//console.log(arr2);
// Результат = ['a', 2, 3]

//100_2
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[1] = 'b';
// console.log(arr1);
// Результат = ['a', 'b', 3] 

//100_3
// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr1[0] = 'a';
// arr2[0] = 'b';
// console.log(arr2);
// Результат = ['b', 2, 3]

//101_1
const arr101_1 = ['a', 'b', 'c'];
arr101_1[1] = '!';
console.log(arr101_1);
// Результат вывода = ['a', '!', 'c']                                                                                                     

//101_2
const arr101_2 = ['a', 'b', 'c'];
arr101_2 = [1, 2, 3];
console.log(arr101_2);
// Результат = Uncaught TypeError: Assignment to constant variable. (нельзя переназначить константу)                                                                                                     

//101_3
const arr101_3 = ['a', 'b', 'c'];
arr101_3 = ['a', 'b', 'c'];
console.log(arr101_3);
// Результат = Uncaught TypeError: Assignment to constant variable. (нельзя переназначить константу) 

//102_1
const arr102 = [1, 2, 3, 4, 5];
const res102 = arr102[1] + arr102[2];
console.log(res102);

//103_1
let obj103_1 = {x: 1, y: 2, z: 3};
console.log(obj103_1['x']); 

//103_2
let obj103_2 = {x: 1, y: 2, z: 3};
let key103_2  = 'x';
console.log(obj103_2[key103_2 ]);

//103_3
let obj103_3 = {x: 1, y: 2, z: 3};
let sum = obj103_3['x'] + obj103_3['y'] + obj103_3['z']; 
console.log(sum); 

//103_4
let obj103_4 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj103_4).length); 