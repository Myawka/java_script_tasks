//167_1
console.log('Результат задания 167 №1:');
for (let i = 1; i <= 100; i++) {
  console.log(i)
}

//167_2
console.log('Результат задания 167 №2:');
for (let i = 100; i >= 1; i--) {
  console.log(i)
}

//167_3
console.log('Результат задания 167 №3:');
for (let i = 2; i <= 100; i += 2) {
  console.log(i)
}

//167_4
console.log('Результат задания 167 №4:');
let arr4 = [];
for (let i = 0; i < 10; i++) {
  arr4.push('x')
}
console.log(arr4)

//167_5
console.log('Результат задания 167 №5:');
let arr5 = [];
for (let i = 1; i <= 10; i++) {
  arr5.push(i);
}
console.log(arr5);

//167_6
console.log('Результат задания 167 №6:');
let arr6 = [5, 10, 25, 50, 55, 2, 4, 7];
for (let elem6 of arr6) {
  if (elem6> 0 && elem6 <= 10) {
      console.log(elem6);
  }
}

//167_7
console.log('Результат задания 167 №7:');
let arr7 = [5, 10, 25, 50, 55, 2, 4, 7];
for (let elem7 of arr7) {
  if (elem7 === 5) {
      console.log(elem7);
      break;
  }
}

//167_8
console.log('Результат задания 167 №8:');
let arr8 = [5, 10, 25, 50, 55, 2, 4, 7];
let sum8 = 0;
for (let elem8 of arr8) {
  sum8 += elem8;
}
console.log(sum8);

//167_9
console.log('Результат задания 167 №9:');
let arr9 = [2, 3, 6, 8, 10];
let sum9 = 0;
for (let elem9 of arr9) {
  let result9 = elem9 ** 2;
  sum9 += result9;
}
console.log(sum9);

//167_10
console.log('Результат задания 167 №10:');
let arr10 = [2, 3, 6, 8, 10];
let result10 = 0;
for (let elem10 of arr10) {
  result10 += elem10;
}
console.log(result10 / arr10.length);

//167_11
console.log('Результат задания 167 №11:');
let arr11 = [2, 3, 6, 8, 10];
let result11 = 1;
for (i = 0; i <= arr11.length - 3; i++) {
  result11 *= arr11[i];
}
console.log(result11);

//167_12
console.log('Результат задания 167 №12:');
let arr12 = [];
for (let i = 1; i <= 10; i++) {
  arr12.push(i);
}
console.log(arr12);

//167_13
console.log('Результат задания 167 №13:');
let arr13 = [-5, 1, 5, 10, -15, -25];
let result13 = 0;
for (let elem13 of arr13) {
  if (elem13 >= 0) {
      result13 += elem13;
  }
}
console.log(result13);

//167_14
console.log('Результат задания 167 №14:');
let arr14 = [50, 65, 70, 80, 95, 100];
for (let elem14 of arr14) {
  let str14 = String(elem14);
  if (str14[0] == 1 || str14[0] == 2 || str14[0] == 5)
      console.log(str14);
}

//167_15
console.log('Результат задания 167 №15:');
let arr15 = [10, 20, 50, 34, 23];
for (let i = arr15.length - 1; i >= 0; i--) {
  console.log(arr15[i]);
}

