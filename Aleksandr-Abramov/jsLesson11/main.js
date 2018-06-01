/*1.
Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров».
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.
*/

function Product(name,price) {
  this.name = name;
  this.price = price;
}
function Backet() {
  this._arrProducts = [];
  this._numberOfGoods = 0;
  this._sumGoods = 0;
}
var product = new Product("Капуста", 5000);
var product2 = new Product("Картофель", 15000);

Backet.prototype.addProduct = function (product) {
   this._arrProducts.push(product);
   this._numberOfGoods += 1;
   this._sumGoods += product.price;
   return "Добавлен продукт: " + product.name + " " + product.price;
}

Backet.prototype.getAllSumm = function () {
  return "Сумма всех продуктов: " + this._sumGoods;
}

Backet.prototype.getSummProduct = function () {
  return "Количество товаров: " + this._numberOfGoods;
}

var backet = new Backet();
console.log(backet.addProduct(product));
console.log(backet.addProduct(product2));
console.log(backet.getAllSumm());
console.log(backet.getSummProduct());

/*
2. Используя смешанное наследование:
Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек:
Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке вида:
«Студент: Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование. Обучается в ИТМО.»
*/

function Man(name, age, sex, interests) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.interests = interests;
}

Man.prototype.toString = function() {
  return `«Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}.»`;
}
var man = new Man("Саша", 33, "М", ["музыка", "программирование"] );

function Student(name, age,sex,interests,institute) {
  Man.apply(this, arguments);
  this.institute = institute;
}

Student.prototype.toString = function () {
  return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}. Обучается в ${this.institute}`;

}
Student.prototype.__proto__ = Man.prototype;

var student = new Student("Даша", 30, "Ж", ["музыка", "программирование"], "ИТМО");
console.log(student.toString());
