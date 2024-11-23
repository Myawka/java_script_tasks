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