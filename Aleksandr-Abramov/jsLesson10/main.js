/*
1. Создать шаблон объектов «Товар».
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

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Backet() {
  this._arrProducts = [];
  this._numberOfGoods = 0;
  this._sumGoods = 0;
  this.addProduct = function (product) {
    this._arrProducts.push(product);
    this._sumGoods += product.price;
    this._numberOfGoods++;
    return this._arrProducts;

  }
  this.getSumm = function () {
    return this._sumGoods;
  }
  this.getNumberOfGoods = function () {
    return this._numberOfGoods;
  }

}
var product2 = new Product("апельсины", 50);
var product1 = new Product("капуста", 40);
var product3 = new Product("картофкль", 65);
var backet = new Backet();
console.log(backet.addProduct(product1));
console.log(backet.addProduct(product2));
console.log(backet.addProduct(product3));
console.log(backet.getSumm());
console.log(backet.getNumberOfGoods());

/*
2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида:
«Человек: Иван. Возраст: 25 лет. Пол: м. Интересы:
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке
вида: «Студент: Иван. Возраст: 25 лет. Пол: м.
Интересы: музыка, программирование.
Обучается в ИТМО.»
*/

function Man(name, age, sex, interests) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.interests = interests;
  this.toString = function () {
    return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests}`;
  }
}

var man = new Man("Иван", 25, "М", ["музыка", "программирование."])
console.log(man.toString());

function Student(institute) {
  Man.apply(this, arguments);
  this.institute = institute;
  this.toString = function () {
    return `Человек: ${this.name}. Возраст: ${this.age} лет. Пол: ${this.sex}. Интересы: ${this.interests} Обучается в ${this.institute}`;
  }
}
var student = new Student("Иван", 25, "М", ["музыка", "программирование."], "ИТМО");
console.log(student.toString());

/*
3. Создать шаблон объектов «Пользователь».
Метод преобразования к строке выводит имя пользователя.
Два фабричных метода:
- «Создать анонимного пользователя» не получает аргументов,
 в качества имя пользователя устанавливает «Аноним».
- «Создать пользователя из данных» в качества аргументов
получает объект с именем и возрастом пользователя.
*/

function User() {
  this.toString = function () {
    return this._name;
  }
}

User.createAnomim = function () {
  var user = new User();
  user._name = "Аноним";
  return user;
}

User.createUserDate = function (obj) {
  var user = new User();
  user._name = obj.name;
  user._age = obj.age;
  return user;
}

var user1 = User.createAnomim();
var user2 = User.createUserDate({name: "Саша", age: 23});
console.log(user1);
console.log(user2);

/*
4.* Выбрать 10 незнакомых (которые не разбирались на занятиях)
шаблонов объектов (классов) доступных в глобальной области и
привести информацию в виде комментариев в коде для чего
они используются. Информацию можно найти в документации
(справочные системы по js, статьи по программированию и т.п.).
*/
/*
№1.


Blob

Конструктор Blob() возвращает новый объект Blob. Содержимое blob состоит из объединенных значений, переданных в параметре array

Синтаксис
var aBlob = new Blob( array, options );

var aFileParts = ['<a id="a"><b id="b">hey!</b></a>']; // an array consisting of a single DOMString
var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob

ссылка https://developer.mozilla.org/ru/docs/Web/API/Blob/Blob
ссылка https://developer.mozilla.org/ru/docs/Web/API/Blob
*/
/*
№2.

Error

Конструктор Error создаёт объект ошибки. Экземпляры объекта Error выбрасываются при возникновении ошибок во время выполнения. Объект Error также может использоваться в качестве базового для пользовательских исключений. Смотрите ниже стандартные встроенные типы ошибок.

new Error([message[, fileName[, lineNumber]]])

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error

№3
HTMLAudioElement
HTMLAudioElement позволяет получить доступ к элементу  <audio> и имеет DOM элемент HTMLMediaElement.

Свойства
Не имеет своих свойств; наследует свойства от родителя HTMLMediaElement и от HTMLElement.

Методы
Наследует методы от родителя HTMLMediaElement и от HTMLElement.

Конструктор
Синтаксис
mySound = new Audio([URLString]);
https://developer.mozilla.org/ru/docs/Web/API/HTMLAudioElement

№4.

Date

Сводка
Создаёт экземпляр объекта Date, представляющего собой момент времени. Объекты даты Date основываются на значении количества миллисекунд, прошедших с 1 января 1970 года в часовом поясе UTC.

Синтаксис
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date;

№5

RangeError

Сводка
Объект RangeError представляет ошибку, возникающую, когда значение не входит в множество или выходит за диапазон допустимых значений.

Синтаксис
new RangeError([message[, fileName[, lineNumber]]])
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RangeError

№6
Event

Интерфейс Event представляет собой любое событие, которое происходит в DOM; некоторые из них генерируемые пользователем (клик мышью или нажатие клавиши на клавиатуре), а некоторые - генерируемые API (события, обозначающие завершение процесса анимации, приостановка видео и т.д.). Существует много типов событий, некоторые из них используют интерфейсы, базирующиеся на главном интерфейсе Event. Event содержит общие свойства и методы для всех событий.

Конструктор Event() создает новый объект события Event.

Синтаксис
 event = new Event(typeArg, eventInit);
Параметры
typeArg
Строковое (DOMString) значение, представляющее имя события.
eventInit Необязательный
Is an EventInit dictionary, having the following fields:
"bubbles": (Необязательный) логическое значение (Boolean) указывающее - будет ли событие всплывающим. По умолчанию false.
"cancelable": (Необязательный) логическое значение (Boolean) указывает, может ли событие быть отменено. По умолчанию false.
"composed": (Необязательный) A Boolean indicating whether the event will trigger listeners outside of a shadow root. The default is false.

https://developer.mozilla.org/ru/docs/Web/API/Event/Event

№7

Number

Объект Number является объектом-обёрткой, позволяющей вам работать с числовыми значениями. Объект Number создаётся через конструктор Number().

Синтаксис
new Number(value)
Параметры
value
Числовое значение, которое примет объект после создания.

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number

№8

XMLHttpRequest

XMLHttpRequest это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы не прерывая пользователя.  XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.

XMLHttpRequest изначально был разработан Microsoft и позже заимствован Mozilla, Apple, и Google. Сейчас он стандартизирован WHATWG. Несмотря на свое название, XMLHttpRequest может быть использован для получения любых типов данных, не только XML, и поддерживает протоколы помимо HTTP (включая file и ftp).

Чтобы начать работать с XMLHttpRequest, выполните этот код:

var myRequest = new XMLHttpRequest();

№9

Promise

Сводка
Объект Promise (обещание) используется для отложенных и асинхронных вычислений. Promise может находиться в трёх состояниях:

ожидание (pending): начальное состояние, не выполнено и не отклонено.
выполнено (fulfilled): операция завершена успешно.
отклонено (rejected): операция завершена с ошибкой.
Другой термин, описывающий состояние заданный (settled): обещание выполнено или отклонено, но не находится в состоянии ожидания.

Синтаксис
new Promise(executor);
new Promise(function(resolve, reject) { ... });

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

№10

Set

Сводка
Объекты Set позволяют вам сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.

Синтаксис
 new Set([iterable]);

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
*/
