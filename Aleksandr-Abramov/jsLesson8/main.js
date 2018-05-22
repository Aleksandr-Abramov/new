/*
1. Создать функцию которая выводит время
в html и обновляет значения каждую секунду.
Время выводить в формате чч:мм:cc, при этом
часы, минуты и секунды отобразить разными цветами.
*/

function time() {
  var div = document.getElementById("time");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time;
  div.children[0].style.color = "red";
  div.children[0].innerHTML = hours + ":";
  div.children[1].style.color = "green";
  div.children[1].innerHTML = minutes + ":";
  div.children[2].style.color = "orange";
  div.children[2].innerHTML = seconds;
  return hours + ":" + minutes + ":" + seconds;
}

setInterval(time, 1000);
console.log(time());
/*
2. Создать объект «Товар» включающий:
- свойства, такие как фото, артикул,
описание и т.п.;
- метод, которому при вызове передается
id пустого div элемента и в этот html
элемент данный метод создаст и внесёт
все необходимые html элементы, стили,
и содержание для отображения
всей информации хранящихся в свойствах
объекта о данном товаре. Дизайн оформления
информации в html о товаре –
это ваше творчество.
*/

var product = {

  img: document.createElement("img"),
  options: document.createElement("div"),
  h2: document.createElement("h2"),
  description: document.createElement("p"),
  propertyList: document.createElement("ul"),
  price: document.createElement("div"),
  fillListHTML: function(cart) {
    var obj = document.getElementById(cart);
    obj.setAttribute("class", "clearfix");
    this.img.setAttribute("src", "item.jpg");
    this.price.setAttribute("class", "price");
    this.img.setAttribute("width", "400");
    obj.appendChild(this.img);
    this.options.setAttribute("class", "options");
    obj.appendChild(this.options);
    obj.appendChild(this.price);
    this.h2.setAttribute("id", "name-product");
    this.options.appendChild(this.h2);
    this.description.setAttribute("id", "description");
    this.options.appendChild(this.description);
    this.propertyList.setAttribute("id", "property-list");
    this.options.appendChild(this.propertyList);
    for (var i = 0; i < 9; i++) {
      var li = document.createElement("li")
      this.propertyList.appendChild(li);
    }
  },
  fillListText: function(name, description, diogonal, diogonalValue, hd, hdValue, wiFi, wiFiValue, color, colorValue, p3D, p3DValue, HDR, HDRValue, standartTv, standartTvValue, width, widthValue, priceValue) {
    this.h2.innerText = name;
    this.description.innerText = description;
    this.price.innerText = priceValue;
    this.propertyList.children[0].innerHTML = diogonal += "<span>" + diogonalValue + "</span>";
    this.propertyList.children[1].innerHTML = hd += "<span>" + hdValue + "</span>";
    this.propertyList.children[2].innerHTML = wiFi += "<span>" + wiFiValue + "</span>";
    this.propertyList.children[3].innerHTML = color += "<span>" + colorValue + "</span>";
    this.propertyList.children[4].innerHTML = p3D += "<span>" + p3DValue + "</span>";
    this.propertyList.children[5].innerHTML = HDR += "<span>" + HDRValue + "</span>";
    this.propertyList.children[6].innerHTML = standartTv += "<span>" + standartTvValue + "</span>";
    this.propertyList.children[7].innerHTML = width += "<span>" + widthValue + "</span>";
  }
}

product.fillListHTML("cart-product");
product.fillListText("Телевизор Витязь 24L301C28",
  "Телевизор «Витязь» 24L301C28 идеально подойдет для вашей кухни или небольшого помещения. Он оснащен интерфейсами HDMI и USB, а встроенный проигрыватель видео позволит вам смотреть фильмы в превосходном качестве HD. Благодаря наличию крепления стандарта Vesa вы без труда сможете подобрать кронштейн для удобного расположения на стене. Диагональ данной модели составляет 24 дюйма.",
  "Диагональ, дюймы", "24",
  "HD-формат", "720p (HD)",
  "Wi-Fi", "Нет",
  "Цвет", "Черный",
  "Поддержка 3D", "Нет",
  "Поддержка HDR", "Нет",
  "Стандарты цифрового телевидения", "DVB-T, DVB-T2",
  "Ширина с подставкой", "557",
  "цена: 9 800");
/*
3. Создать светофор (красный, желтый,
зелёный). Переключать цвет у светофора
через каждые 2 сек сверху вниз и снизу вверх.
*/

function colorPlas() {
  var trafficLight = document.getElementById('trafficLight');
  trafficLight.children[1].style.background = "red";
  trafficLight.children[0].style.background = "yellow";
  setTimeout(colorPlas2, 2000);
}
setTimeout(colorPlas, 1000);

function colorPlas2() {
  var trafficLight = document.getElementById('trafficLight');
  trafficLight.children[2].style.background = "red";
  trafficLight.children[1].style.background = "green";
  setTimeout(colorPlas3, 2000);
}

function colorPlas3() {
  var trafficLight = document.getElementById('trafficLight');
  trafficLight.children[1].style.background = "red";
  trafficLight.children[2].style.background = "green";
  setTimeout(colorPlas4, 2000);
}

function colorPlas4() {
  var trafficLight = document.getElementById('trafficLight');
  trafficLight.children[0].style.background = "red";
  trafficLight.children[1].style.background = "yellow";
  setTimeout(colorPlas, 2000);
}
