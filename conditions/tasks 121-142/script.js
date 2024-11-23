//121_1
let test121_1 = true;
if (!test121_1) {
  console.log('+++');
} else {
  console.log('---');
}

//121_2
let test121_2 = true;
if (!test121_2) {
  console.log('+++');
} else {
  console.log('---');
}

//121_3
let test121_3 = true;
if (test121_3) {
  console.log('+++');
} else {
  console.log('---');
}

// 122_1
// let test = 3;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = +++

// 122_2
// let test = 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = +++

// 122_3
// let test = '';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_4
// let test = 3 * 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_5
// let test = null;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_6
// let test = false;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_7
// let test;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_8
// let test = 0;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = ---

// 122_9
// let test = '0';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = +++

// 122_10
// let test = -1;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат = +++


//123_1
let test123_1 = true;
let test123_2 = true;
if (test123_1 && test123_2 ) {
	console.log('+++');
} else {
	console.log('---');
}

//123_2
let test123_3 = true;
let test123_4 = true;
if (test123_3 && !test123_4) {
	console.log('+++');
} else {
	console.log('---');
}

//123_3
let test123_5 = true;
let test123_6 = true;
if (!test123_5 && !test123_6 ) {
	console.log('+++');
} else {
	console.log('---');
}

//123_4
let test123_7 = true;
let test123_8 = true;
if (test123_7 && test123_8) {
	console.log('+++');
} else {
	console.log('---');
}

//123_5
let test123_9 = true;
let test123_10 = true;
let test123_11 = true;
if (test123_9 && test123_10 && test123_11) {
	console.log('+++');
} else {
	console.log('---');
}

//123_6
let test123_12 = true;
let test123_13 = true;
let test123_14 = true;
if (test123_12 || test123_13 && test123_14 ) {
	console.log('+++');
} else {
	console.log('---');
}

//123_7
let test123_15 = true;
let test123_16 = true;
let test123_17 = true;
if (test123_15 || !test123_16 && !test123_17) {
	console.log('+++');
} else {
	console.log('---');
}

//124_1
let test124 = 10;
if (test124 == 10) {
	console.log('yes');
}

//125_1
let test125_1 = 5;
if (test125_1 > 0) console.log('+++'); else console.log('---');

//125_2
let test125_2 = 15;
if (test125_2 > 0) console.log('+++');

//127_1
let day127_1 = 25; 
if (day127_1 >= 1 && day127_1 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_1 >= 11 && day127_1 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_1 >= 21 && day127_1 <= 31) {
  console.log('Третья декада месяца');
}

//127_2
let day127_2 = 35;
if (day127_2 >= 1 && day127_2 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_2 >= 11 && day127_2 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_2 >= 21 && day127_2 <= 31) {
  console.log('Третья декада месяца');
} else {
  console.log('Неверное значение переменной day');
}

//128_1
let num128 = 15;
let sum128;
if ((num128 >= 0) && (num128 <= 99)) {
    sum128 =(num128 / 10) + num128 % 10; 
	if (sum128 <= 9) {
		console.log('Сумма цифр однозначна');
	} else {
		console.log('Сумма цифр двузначна');
	}
} 

//129_1
let lang = 'ru';
switch (lang) {
    case 'ru':
		console.log('рус');
	break;
    case 'en':
        console.log('анг');
    break;
    case 'de':
		console.log('нем');
	break;
    default:
		console.log('язык не поддерживается');
	break;
}

//131_1
let num131 = 1;
let res131 = num131 >= 0 ? '1' : '2';
console.log(res131);

//132_1
let a132_1 = 2 * (3 - 1);
let b132_1 = 6 - 2;
console.log(a132_1 == b132_1);

//132_2
let a132_2 = 5 * (7 - 4);
let b132_2 = 1 + 2 + 7;
console.log( a132_2 >= b132_2)

//132_3
let a132_3 = 2 ** 4;
let b132_3 = 4 ** 2;
console.log(a132_3 != b132_3);

//133_1
let task133 = confirm('Вам есть 18?');
if (task133) {
	alert('Доступ разрешен, вы можете прочитать этот зачарованный текст');
} else {
	alert('Доступ запрещен');
}

//134_1
let age = 17;
let adult;
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
console.log(adult)

//135_1
let age135_1 = 17;
let adult135_1;
if (age135_1 >= 18) {
	 adult135_1 = true;
} else {
	adult135_1 = false;
}

console.log(adult135_1);

//135_2
let age135_2 = 17;
let adult135_2;
if (age135_2 >= 18) {
	adult135_2 = true;
} else {
	adult135_2 = false;
}
console.log(adult135_2);

//135_3
let age135_3 = 17;
let res135_3;
if (age135_3 >= 18) {
	if (age135_3 <= 23) {
         res135_3 = 'от 18 до 23';
	} else {
		res135_3 = 'больше 23';
	}
} else {
    res135_3 = 'меньше 18';
}
console.log(res135_3);

//135_4
let age135_4 = 19;
let res135_4;
if (age135_4 >= 18) {
	if (age135_4 <= 23) {
		res135_4 = 'от 18 до 23';
	} else {
		res135_4 = 'больше 23';
	}
} else {
	res135_4 = 'меньше 18';
}
console.log(res135_4);

// Задание 136 №1
let min = 10;
if (min >= 0 && min <= 19) {
  console.log('1 треть');
} else if (min >= 20 && min <= 39) {
  console.log('2 треть');
} else if (min >= 40 && min <= 59) {
  console.log('3 треть');
}

//137_1
let arr137 = [1, 2, 3];
if (arr137.length === 3) {
  let sum137 = arr137[0] + arr137[1] + arr137[2];
  console.log(sum137);
}

//138_1
let str = 'culture';
if (str[0] == 'a') {
	console.log('yes');
}

//138_2
let str2 = 'box';
if (str2[str2.length - 1] == 'x') {
	console.log('yes');
}

//138_3
let str3 = 'base';
if (str3[0] == 'a' || str3[0] == 'b') {
	console.log('yes');
}

//139_1
let num139_1 = '500';
 if (num139_1[num139_1.length - 1] == '0'){
    console.log('Последняя цифра = 0');
 }

//139_2
 let num139_2 = '222';
 let last = num139_2[num139_2.length - 1];
 if (last == '0' || last == '2' || last == '4' || last == '6' || last == '8') {
     console.log('Число четное');
 } else {
     console.log("Число нечетное");
 } 

//140_1
let a140_1 = 14;
if (a140_1 % 2 === 0) {
	console.log('Число четное');
} else {
	console.log('Число нечетное');
}

//140_2
let b = 15;
if (b % 3 === 0) {
	console.log('Число делится нацело на 3');
} else {
	console.log('Число делится на 3 с остатком');
}

//141_1
let num140 = 1;
let num140_1 = 2;
if (num140 + num140_1 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//141_2
let num140_2 = '1';
let num140_3 = '2';
if (Number(num140_2) + Number(num140_3) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//141_3
let num140_4 = '1';
let num140_5 = '2';
if (Number(num140_4) + Number(num140_5) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//141_4
let num140_6 = 123;
let str140_4 = String(num140_6);
if (str140_4[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//141_5
let num140_8 = 123;
let str140_5 = String(num140_8);

if (Number(str140_5[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

//141_6
let num140_9 = 123;
if (String(num140_9)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//141_7
let num140_10 = 123;
let first = String(num140_10)[0];
if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}

//141_8
let num140_11 = 12;
let str140_8 = String(num140_11);
if (str140_8.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//141_9
let num140_12 = 12;
let str140_9 = String(num140_12);
if (Number(str140_9.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//141_10
let num140_13 = 12;
if (String(num140_13).length === 2) {
 console.log('+++');
} else {
 console.log('---');
}

//141_11
let num140_14 = 12;
if (String(num140_14).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

//141_12
let num140_15 = 12;
if (String(num140_15).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

//141_13
let num140_16 = '123033'; // берем в кавычки, чтобы обращаться к цифрам
let sum140_1 = Number(num140_16[0]) + Number(num140_16[1]) + Number(num140_16[2]);
let sum140_2 = Number(num140_16[3]) + Number(num140_16[4]) + Number(num140_16[5]);
if (sum140_1 == sum140_2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}

//142_1
let month = 5; 
let season;
if (month == 12 || month == 1 || month == 2) {
    season = "Зима";
} else if (month >= 3 && month <= 5) {
    season = "Весна";
} else if (month >= 6 && month <= 8) {
    season = "Лето";
} else if (month >= 9 && month <= 11) {
    season = "Осень";
} else {
    season = "Неправильно введен порядок месяца";
}
console.log(season);

//142_2
let str142_2 = 'alladin'; 
if (str142_2[0] == 'a') {
    console.log('Да');
} else {
    console.log('Нет');
}

//142_3
let num142_3 = 1234;
let str142_3 = String(num142_3);
if (str142_3[0] == '1' || str142_3[0] == '2' || str142_3[0] == '3') {
 console.log('Да');
} else {
    console.log('Нет');
}
   
//142_4
let arr142_4 = 123;
let str142_4 = String(arr142_4);
let x142_4 = 0;
let sum142_4 = 0;
if (Number(str142_4) !== 0) {
  for (let i = 0; i < str142_4.length; i++) {
    x142_4 = Number(str142_4[i]);
    sum142_4 = sum142_4 + x142_4;
  }
  console.log('Сумма равна: ' + sum142_4);
}

//142_5
let num142_5 = 123006;
let y = String(num142_5);
let sum142_5 = Number(y[0]) + Number(y[1]) + Number(y[2]);
let sum142_6 = Number(y[3]) + Number(y[4]) + Number(y[5]);
if (sum142_5 === sum142_6) {
    console.log('Да');
} else {
    console.log('Нет');
}