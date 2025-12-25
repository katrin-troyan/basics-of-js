// const value = prompt("Введіть товар").toLowerCase();
// let price;

// switch (value) {
//   case "банан":
//     price = 70;
//     alert(`${value} коштує ${price} грн.`);
//     break;
//   case "лимон":
//     price = 50;
//     alert(`${value} коштує ${price} грн.`);
//     break;
//   default:
//     alert("Такий товар не знайдено");
// }

// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте це на варіантах  1, 0, -3.
// let value = Number(prompt("Введи число і дізнайся чи більше нуля"));
// console.log(value > 0);

// Якщо змінна ="test" - виведіть true,
// //Перевірте це на варіантах  'test', "qwerty", true
// let value = prompt("Введіть слово test").toLowerCase();
// console.log(value === "test");

// Якщо змінна більше 10 -  відніміть 5, менше - додайте 5, результат виведіть в консоль
// Перевірте це на варіантах  1, 10, 13.
// let value = Number(
//   prompt("Введіть число, якщо число більше 10 -  буде (-5), менше - (+5)")
// );
// console.log(value > 10 ? value - 5 : value + 5);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// const num = Number(prompt("Введіть число від 1 до 12"));
// let month;
// switch (num) {
//   case 1:
//     month = "січень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 2:
//     month = "лютий";
//     alert(`Місяць - ${month}`);
//     break;
//   case 3:
//     month = "березень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 4:
//     month = "квітень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 5:
//     month = "травень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 6:
//     month = "червень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 7:
//     month = "липень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 8:
//     month = "серпень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 9:
//     month = "вересень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 10:
//     month = "жовтень";
//     alert(`Місяць - ${month}`);
//     break;
//   case 11:
//     month = "листопад";
//     alert(`Місяць - ${month}`);
//     break;
//   case 12:
//     month = "грудень";
//     alert(`Місяць - ${month}`);
//     break;
//   default:
//     alert("Введіть число від 1 до 12");
// }

//Зробіть сервіс який отримує тризначне число
// //Поверніть користувачу сумму цих чисел
// const num = prompt("Введіть тризначне число");
// if (num.length !== 3) {
//   alert("Введіть тризначне число");
// } else {
//   let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
//   alert(`Сума: ${sum}`);
// }
