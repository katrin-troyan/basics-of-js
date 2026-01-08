// --1--
// 1) написати об * єкт студента який буде виводити ім * я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою  call apply bind

// const student = {
//   name: "Ivan",
//   specialty: "Computer Science",
//   averageGrade: 4.5,
//   missedClasses: 2,
//   getInfo: function () {
//     console.log(
//       `Name: ${this.name}, Specialty: ${this.specialty}, Average Grade: ${this.averageGrade}, Missed Classes: ${this.missedClasses}`
//     );
//   },
// };
// student.getInfo.call(student);

// const student2 = {
//   name: "Olga",
//   specialty: "Mathematics",
//   averageGrade: 4.8,
//   missedClasses: 1,
// };
// const student3 = {
//   name: "Dmytro",
//   specialty: "Physics",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };
// const student4 = {
//   name: "Anna",
//   specialty: "Biology",
//   averageGrade: 4.6,
//   missedClasses: 0,
// };
// student.getInfo.bind(student2)();
// student.getInfo.apply(student3);
// student.getInfo.call(student4);

// --2--
// Написати дві кнопки і закріпити на них функції при натисканні на кнопку html - має видати коротке визначення що це таке при натисканні на кнопку css - має видати коротке визначення що це таке

// const text = {
//   showText() {
//     console.log(`${this.content}`);
//   },
// };
// const html = {
//   content:
//     "HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
// };
// const css = {
//   content:
//     "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
// };

// document
//   .querySelector("#htmlBtn")
//   .addEventListener("click", text.showText.bind(html));
// document
//   .querySelector("#cssBtn")
//   .addEventListener("click", text.showText.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару функція має повертати назву товару і вартість перевірити на варіантах:
// 1) banana 30, 4
// 2) cherry  58, 1
// 3) jrange 89. 3

function shopItem(name, priceKg, numeber) {
  const totalPrice = priceKg * numeber;
  return `Product: ${name}, Total price: ${totalPrice} грн`;
}
console.log(shopItem("banana", 30, 4));
console.log(shopItem("cherry", 58, 1));
console.log(shopItem("orange", 89, 3));
