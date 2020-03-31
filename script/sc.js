// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

let cheese = {
  product: "cheese",
  numberOfproducts: 0,
  boughtOrNot: "no",
  change: function(newN) {
    this.numberOfproducts += newN;
    if (this.boughtOrNot == "no") {
      this.boughtOrNot = "yes";
    }
  }
};
let apple = {
  product: "apple",
  numberOfproducts: 2,
  boughtOrNot: "yes",
  change: function(newN) {
    this.numberOfproducts += newN;
    if (this.boughtOrNot == "no") {
      this.boughtOrNot = "yes";
    }
  }
};
let banana = {
  product: "banana",
  numberOfproducts: 1,
  boughtOrNot: "yes",
  change: function(newN) {
    this.numberOfproducts += newN;
    if (this.boughtOrNot == "no") {
      this.boughtOrNot = "yes";
    }
  }
};
let milk = {
  product: "milk",
  numberOfproducts: 0,
  boughtOrNot: "no",
  change: function(newN) {
    this.numberOfproducts += newN;
    if (this.boughtOrNot == "no") {
      this.boughtOrNot = "yes";
    }
  }
};

let shopList = [apple, banana, milk, cheese];

// shopList.push("Push + 1 елем в масив");

// тут те саме, що через інтерацію (Чомусь не працює) =============

// for (let i of shopList) {
//   console.log("Надіючись бачити назву моїх об'єктів у масиві");
//   console.log(i);
//   console.log("Використовую фор для масивів");
// }
// // =================================================================

let watch = () => {
  for (let key in shopList) {
    console.log(key);
    console.log(shopList[key]);
  }
};

shopList.sort((a, b) => {
  return a.numberOfproducts - b.numberOfproducts;
});

for (let key in shopList) {
  console.log(key);
  console.log(shopList[key]);
}

let buy = function(x, n) {
  for (let i = 0; i < shopList.length; i++) {
    if (x == shopList[i].product) {
      shopList[i].change(n);
    }
  }

  shopList.sort((a, b) => {
    return a.numberOfproducts - b.numberOfproducts;
  });
};

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара,
//  количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

let check = [
  {
    product: `ball`,
    quantity: 2,
    price: 100
  },
  {
    product: `keyboard`,
    quantity: 1,
    price: 250
  },

  {
    product: `marker`,
    quantity: 3,
    price: 4
  }
];

let summOfProduct = 0;

let summ = () => {
  for (let i = 0; i < check.length; i++) {
    summOfProduct += check[i].price * check[i].quantity;
  }
  console.log(summOfProduct);
};

let watchCheck = () => {
  for (let key in shopList) {
    console.log(key);
    console.log(check[key]);
  }
};

let biG = 0;
let most = 0;
let mostExpensive = () => {
  for (let i = 0; i < check.length; i++) {
    let most = 0;
    most += check[i].price * check[i].quantity;

    if (most > biG) {
      biG = most;
    }
  }
  console.log(biG);
};

let middle = 0;
let middlePrice = () => {
  for (let i = 0; i < check.length; i++) {
    middle += check[i].price;
  }
  middle /= check.length;
  console.log(middle);
};

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств:
// название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью
//  document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let styleList = [
  {
    name: `color`,
    style: `color: rgb(49, 151, 116); `
  },
  {
    name: `text size`,
    style: `font-size: 20pt; `
  },
  {
    name: `align-выравнивание`,
    style: `text-align:center; `
  },
  {
    name: `underline`,
    style: `text-decoration: underline; `
  }
];

let funcWrite = (arr, text) => {
  let getStyle = "";
  for (let i = 0; i < arr.length; i++) {
    getStyle += arr[i].style;
  }

  document.write(`<p style="` + getStyle + `">` + text + "</p>");
};

//===============================

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let Lawyers = {
  name: "Lawyers",
  numberOfSeats: 15,
  intended: "Lawyers"
};

let Doctors = {
  name: "Doctors",
  numberOfSeats: 14,
  intended: "Doctors"
};
let Designers = {
  name: "Designers",
  numberOfSeats: 13,
  intended: "Designers"
};
let Programmers = {
  name: "Programmers",
  numberOfSeats: 8,
  intended: "Programmers"
};
let ProgrammersBIG = {
  name: "ProgrammersBIG",
  numberOfSeats: 16,
  intended: "Programmers"
};

let auditorium = [Lawyers, Designers, Programmers, ProgrammersBIG, Doctors];

let watchAudit = () => {
  auditorium.forEach(objAuditorium => console.log(objAuditorium));
};

let howFacult = Xfacult => {
  const forFacultet = auditorium.filter(facult => {
    if (facult.intended == Xfacult) {
      return true;
    }
  });
  console.log(forFacultet);
};

let objGroupe = {
  name: "BeetrootStud",
  studentNumbers: 11,
  facultet: "Programmers"
};

let forGrupe = objSamGroupe => {
  const howAuditCanUseGrope = auditorium.filter(objAudit => {
    if (
      objAudit.intended == objSamGroupe.facultet &&
      objAudit.numberOfSeats >= objSamGroupe.studentNumbers
    ) {
      return true;
    }
  });
  console.log(howAuditCanUseGrope);
};

let sortAuditorium = () => {
  auditorium.sort((a, b) => {
    return b.numberOfSeats - a.numberOfSeats;
  });
  console.log(auditorium);
};

let sortAuditoriumABC = () => {
  auditorium.sort(function(a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });
  console.log(auditorium);
};
