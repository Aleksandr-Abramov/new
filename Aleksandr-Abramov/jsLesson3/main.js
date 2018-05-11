/*1 Дана строка, изображающая целое число.
Вывести сумму цифр этого числа.*/
var s = prompt("Введите строку").toLowerCase();

var str = s.match(/\d/g);

var result = 0;
for (var i = 0; i < str.length; i++) {
  result += parseInt(str[i]);
}
console.log(result);

/*2 Дана строка S и символ C.
Удвоить каждое вхождение символа C в строку S.*/
//Решение 1
var s = prompt("Введите строку").toLowerCase();
var c = prompt("Введите символ").toLowerCase();

s = s.split("");
c = c.split("");
var arr = [];
for (var i = 0; i < s.length; i++) {
  for (var j = 0; j < c.length; j++) {
    if (c[j] === s[i]) {
      s[i] += c[j]
    }
  }
}
var str = s.join("");
console.log(str);
//Решение 2.
// var s = prompt("Введите строку").toLowerCase();
// var c = prompt("Введите символ").toLowerCase();
// var regX = new RegExp(c,"g");
// var result = s.replace(regX, "" + c + c);
// console.log(result);
/*
3 Проверить что введенный пароль удовлетворяет
следующим условиям сложности:
	- длинна от 9 символов;
	- содержит обязательно английские буквы верхнего
	и нижнего регистра;
	- содержит более двух цифр;
	- содержит обязательно один из неалфавитных
	символов (например, !, $, #, %).
  */
var regX2 = new RegExp(/[a-zA-z]{5,}\d{3,}[!@#$%^&*]{1,}/ig)
var pass = prompt("");
if (regX2.test(pass)) {
console.log("пароль из 5 букв, 3 цифр и 1 !@#$%^&* символа.");
} else {
  console.log("Ошибка!");
}
