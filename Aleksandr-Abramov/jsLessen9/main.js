/*
1. Даны несколько div элементов на html.
По первому нажатию на каждый div
он перекрашивается зеленым цветом,
при повторном нажатии перекрашивается
обратно и так далее каждый клик
происходит чередование цвета.
*/
function divColor() {
  var div = document.querySelector('.container');
  for (var i = 0; i < div.children.length; i++) {
    div.children[i].addEventListener("click", function() {
      this.classList.toggle("color");
      if (this.textContent === "green") {
        this.textContent = "no color";
      } else {
        this.textContent = "green";
      }
    });
  }
}
divColor();
/*
2. Реализовать счётчик нажатий на
кнопку: Дана кнопка внутри неё
записана цифра. При клике на
кнопку – её значение должно
увеличиваться на единицу.
*/


var button = document.querySelector('.btnPlas');
var counter = 0;
button.addEventListener("click", function() {
  this.textContent = counter;
  return counter++;
});
/*
3*. Изобразить клавиатуру и расположенные
на ней клавиши в виде html документа.
При нажатии клавиши пользователем
на клавиатуре, подсвечивать нажатую
клавишу на клавиатуре изображенной
в html и выводить нажатое значение.
*/

function keyboardStart() {

  var keyboard = document.querySelector(".keyboard");
  var char = document.querySelector(".char");
  document.addEventListener("keydown", function(e) {
    var keycode = e.keyCode;
    var symbol = String.fromCharCode(keycode).toLowerCase();
    if (keycode >= 48 && keycode <= 90) {
      char.textContent = symbol;
    }

    for (var i = 0; i < keyboard.children.length; i++) {

      keyboard.children[i].style.background = "white";

    }

    for (var i = 0; i < keyboard.children.length; i++) {
      if (keyboard.children[i].textContent === symbol) {
        keyboard.children[i].style.background = "green";
      }
    }
  });
}

keyboardStart();
