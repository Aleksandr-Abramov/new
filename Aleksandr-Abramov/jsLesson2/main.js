/*1. Перераспределить значения переменных
X и Y так, чтобы в X оказалось меньшее
из этих значений, а в Y — большее. */
// alert("Перераспределить значения переменных X и Y так,\n чтобы в X оказалось меньшее из этих значений, а в Y — большее.")
// var x = prompt("Введите число X", "");
// var y = prompt("Введите число Y", "");
//
// if (x >  y) {
//   var maxValue = x;
//     x = y;
//     y = maxValue;
// }
// console.log("X = " + x);
// console.log("Y = " + y);

/*2. Есть три вершины a, b и с. У каждой
вершина заданы координатами x, y, z как
целые числа. Нужно определить - является
ли треугольник с заданными координатами
прямоугольным.*/
// alert('Есть три вершины a, b и с. У каждой\nвершина заданы координатами x, y, z как\n целые числа. Нужно определить - является\n ли треугольник с заданными координатами прямоугольным.');

/*3. Дан номер месяца (1 — январь,
2 — февраль, ...). Вывести название
соответствующего времени года
("зима", "весна" и т.д.).*/
// alert("Введите номер месяца: 1 - Январь, 2 - Февраль, 3 - Март, 4 - Апрель, 5 - Май, 6 - Июнь, 7 - Июль, 8 - Август, 9 - Сентябрь, 10 - Октябрь, 11 - Ноябрь, 12 -Декабрь");
// // Решение 1
// var month = +prompt("Введите номер месяца от 1 - 12");
//
// switch (month) {
//   case 1:
//     console.log("Зима");
//     break;
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//     console.log("Весна");
//     break;
//   case 4:
//     console.log("Весна");
//     break;
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//     console.log("Лето");
//     break;
//   case 7:
//     console.log("Лето");
//     break;
//   case 8:
//     console.log("Лето");
//     break;
//   case 9:
//     console.log("Осень");
//     break;
//   case 10:
//     console.log("Осень");
//     break;
//   case 11:
//     console.log("Осень");
//     break;
//   case 12:
//     console.log("Зима");
//     break;
//   default:
//     console.log("Ввод не корректен!");
// }
// // Решение 2
// if (month <= 2 || month === 12) {
//   console.log("Зима");
// } else if (month <= 5) {
//   console.log("Весна");
// } else if (month <= 8) {
//   console.log("Лето");
// } else if (month <= 11) {
//   console.log("Осень");
// } else {
//   console.log("Ввод не корректен!");
// }

/*4. Единицы длины пронумерованы следующим
образом:
1 — дециметр, 2 — километр,
3 — метр, 4 — миллиметр, 5 — сантиметр.
Дан номер единицы длины и длина
отрезка L в этих единицах (вещественное
число). Вывести длину данного отрезка
в метрах.*/
//
// alert("Единицы длины пронумерованы следующим образом:\n1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр.\n Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число).\n Вывести длину данного отрезка в метрах.");
//
// var l = +prompt("Введите произвольное число L");
// var unuts = +prompt("Введите единицы измерения:\n1 — дециметр\n2 — километр\n3 — метр\n4 — миллиметр\n5 — сантиметр");
//
// switch (unuts) {
//   case 1:
//     console.log(l / 10 + " Метра"); //дц
//     break;
//   case 2:
//     console.log(l * 1000 + " Метра"); //км
//     break;
//   case 3:
//     console.log(l + " Метра"); //м
//     break;
//   case 4:
//     console.log(l / 1000 + " Метра"); //мл
//     break;
//   case 5:
//     console.log(l / 100 + " Метра"); //см
//     break;
//   default:
//     console.log("Не то значение!");
// }
/*
5*. Пользователь вводит строку, необходимо определить
является ли она палиндромом. (Палиндром - это текст,
который читается одинаково и слева, и справа.
Примеры для тестирования:
1) '49094' – это строка палиндром
2) 'Я бы изменил мир, но бог не дает исходники' – это строка не палиндром
3) 'Сел в озере березов лес' – это строка палиндром
*/
var str = prompt("Введите строку. Проверка на палиндром", "");
str = str.toLowerCase().replace(/ /g, '');
if (str.split('').reverse().join('') === str) {
console.log(str + " Палендром");
} else {
  console.log(str + " Не палиндром");
}

/*6*. Пользователь вводит год, необходимо определить
является ли он високосным. Примеры данных для тестирования:
1) '2000' – високосный год
2) '1800' – не високосный год*/

// alert("Пользователь вводит год, необходимо определить\nявляется ли он високосным. Примеры данных для тестирования:\n2000 - высокосный год\n1800 - не высокосный год");
// var year = prompt("Введите год.");
// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//   console.log(year + " высокосный");
// } else {
//   console.log(year + " не высокосный");
// }

/*7*. Пользователь вводит количество тарелок и количество
моющего средства. Моющее средство расходуется из расчета 0.5
на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
1) сколько тарелок осталось, если моющее средство закончилось:
'Моющее средство закончилось. Осталось N тарелок'
(где N – заменить на число оставшихся тарелок)
2) сколько осталось моющего средства, если тарелки закончились:
'Все тарелки вымыты. Осталось N ед. моющего средства'
(где N – заменить на число оставшегося моющего средства)
3) если мы помыли все тарелки и моющее средство закончилось,
то вывести: 'Все тарелки вымыты, моющее средство закончилось'*/

// var plates = +prompt("Введите количество тарелок.", "");
// var detergent = +prompt("Введите количество моющего средства.", "");
// detergent /= 0.5;
//
// while (true) {
//   plates--;
//   detergent--;
//   if (plates == 0 && detergent == 0) {
//     console.log('Все тарелки вымыты, моющее средство закончилось');
//     break;
//   }
//   if (plates == 0) {
//     console.log('Все тарелки вымыты. Осталось ' + detergent + ' ед. моющего средства');
//     break;
//   }
//   if (detergent == 0) {
//     console.log('Моющее средство закончилось. Осталось ' + plates + ' тарелок');
//     break;
//   }
// }
