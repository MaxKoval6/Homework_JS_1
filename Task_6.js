// "use strict";
// let input = " ";
// let total = 0;

// while (input) {
//   input = +prompt("Введіть число");
// }
// if (Number.isNaN(input)) {
//   alert("Було написано не число, спробуйте ще раз");
//   input = " ";
// } else {
//   total = total + input;
// }
// alert(`Загальна сума чисел дорівнює ${total}`);

let total = 0;
let input;

do {
  input = prompt("Введіть число");
  if (isNaN(input)) {
    alert("Було написано не число, спробуйте ще раз");
    continue;
  }
  total += Number(input);
} while (input !== null);

alert(total);
