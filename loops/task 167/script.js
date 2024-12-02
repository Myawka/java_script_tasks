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

