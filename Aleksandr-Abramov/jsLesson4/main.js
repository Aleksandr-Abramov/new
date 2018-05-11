/*1. Задача.
Заданы два массива
A = [ 12, 4, 3, 10, 1, 20 ]
B = [-3, -7, -100, -33]
необходимо их объединить
в один массив C добавив
массив B в конец(в начало) A.
*/
var a = [ 12, 4, 3, 10, 1, 20 ];
var b = [-3, -7, -100, -33];
//B в конец A
var c = [].concat(a).concat(b);
console.log(c);
//B в начало A
var c = [].concat(b).concat(a);
console.log(c);
/*
3. Задача
Задан массив  - [12,4,3,10,1,20].
Удалить из него наименьшее и наибольшее значение.
*/

var arr1 = [1,4,5,6,7,12];
var maxValue = 0;
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] > maxValue) {
    maxValue = arr1[i];
  }
}

var minValue = maxValue;
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] < minValue) {
    minValue = arr1[i];
  }
}

var arr2 = arr1.filter(function(elem) {
  if (elem < maxValue && elem !== minValue) {
    return true;
  } else {
    return false;
  }
});

console.log(arr2);
/*
4 Задача. Задан массив - [12,4,3,10,1,20].
Необходимо отсортировать его в порядке возрастания,
при этом не использовать готовый метод sort
и методы разобранные на занятии.
Снабдите комментариями каждую строку.
*/
//Сортировка пузырьком

var arr3 = [12, 4, 3, 10, 1];

 for (var i = 0; i < arr3.length; i++) { //выполняем цикл по количеству элементов в массиве.
  for (var j = 0; j < arr3.length  -1; j++) { //цикл для проверки текущего элемента со следующим
    if (arr3[j] > arr3[j + 1]) {// если текущий элемент больше следующего.
      var temp = arr3[j + 1]; //создаем переменную, сохраняем значение следующего элемента.
      arr3[j + 1] = arr3[j]; //меняем местами элемента. В следующий сохраняем значение текущего.
      arr3[j] = temp; //в текущий сохраняем значение предыдущего, из вспомогательной переменной.
    }
  }
 }
console.log(arr3);

/*
2. Задача.
Одномерным массивом задана доска 3 на 3
var area =
[ null, null, null, null, null, null, null, null, null ]

Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML.

При появлении в массиве 0-ля рисовать нолик , 1-цы крестик

Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.
*/
// var arr4 = [ 1, null, 0, null, 1, null, null, null, null];


var arr = [ 1, null, 0, null, 1, null, null, null, null ];
var table = "<table><tr>";
var td = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
     td.push("<td>X</td>");
  } else if (arr[i] === 0) {
    td.push("<td>0</td>");
  } else if (arr[i] === null) {
    td.push("<td></td>");
  }
  if(i === 3) {
    td[2] += "</tr><tr>";

  } else if (i === 6) {
     td[5] += "</tr><tr>";
  }
  else if (i === 8) {
     td[8] += "</tr></table>";
  }
}
var tr = td.join("");
table += tr;

document.write(table);
