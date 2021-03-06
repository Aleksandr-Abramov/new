/*
1 Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент,
а она выводит его содержимое.

Массивы, циклы, условия:
*/
var student = {
  firstName: "Василий ",
  lastName: "Пупкин ",
  age: 24,
  interest: "Программирование ",
  institute: "ИТМО",
}

function content(student) {
  return student.firstName + student.lastName + student.age + " " + student.interest + student.institute;
}
var a = content(student);
console.log(a);
/*
2 Заданы два массива A и B необходимо их объединить
в один массив C так, чтобы в массиве остались уникальные
(неповторяющиеся) элементы.
Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
*/
var a = [1, 2, 2, 5, , undefined, 2, 6, 8, 9];
var b = [6, 2, 3, 3, 246, 1, 214, 2, 5];
var c = a.concat(b);
c = c.filter(function(n) {
  return n != undefined
});

for (var i = 0; i < c.length; i++) {
  for (var j = i + 1; j < c.length; j++) {
    if (c[i] === c[j]) {
      c.splice(i, 1);
      i--;
    } else {
      continue;
    }
  }
}

console.log(c);
/*
3 Написать отдельную функцию, которая выводит пользователю
заданное число чисел Фибоначчи.
(например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21).
Заданное число передается функции в качестве аргумента.
Про числа Фибоначчи: https://ru.wikipedia.org/wiki/Числа_Фибоначчи
*/
function fibo(num) {
  var a = 1;
  var b = 1;
  var arrFibo = [a, b];
  if (num === 1) {
    return 1;
  } else if (num === 0) {
    return 0;
  } else {
    for (var i = 3; i <= num; i++) {
      var c = a + b;
      a = b;
      b = c;
      arrFibo.push(b);
    }
  }

  return arrFibo;
}
console.log(fibo(8));
/*
Напишите функцию counter, которая возвращает количество дней,
часов и минут до нового года. Датой наступления нового года считается
1 января. Функция должна вернуть строку вида: "14 дней 21 час 46 минут"
Нужно реализовать корректные окончания слов, например: 1 день, 2 дня,
5 дней. Функция должна корректно работать при запуске в любом году,
т. е. грядущий год должен вычисляться программно.
*/




function counter() {
  var today = new Date()
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  hours = 23 - hours;
  minutes = 59 - minutes;
  msPerDay = 1000*60*60*24;
  days = new Date(today.getFullYear() + 1, 0, 1);
  days = Math.round((days - today) / msPerDay);
  var strDays = String(days);
  var decline = strDays.slice(-1);
  var endingDays;
  var endingHours;
  var endingMinutes;

  if (Number(decline) === 1) {
    endingDays = " день ";
  } else if (Number(decline) <= 4) {
    endingDays = " дня ";
  } else {
    endingDays = " дней ";
  }

  if (hours === 1) {
    endingHours = " час ";
  } else if (hours <= 4 ) {
    endingHours = " часа ";
  } else {
    endingHours = " часов ";
  }

  if (minutes % 10 == 1) {
    endingMinutes = " минута ";
  } else if ( minutes % 10 == 2 || minutes % 10 == 3 || minutes % 10 == 4) {
    endingMinutes = " минуты ";
  } else {
    endingMinutes = " минут ";
  }

  return "До нового года оствлось: " + days + endingDays + hours + endingHours + "и " + minutes + endingMinutes;
}
console.log(counter());
