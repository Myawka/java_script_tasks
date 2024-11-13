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
