// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua',
// 1, 10, -999, 123, 3.14, 2.7, 16,
// true, false.
//     Вивести кожну змінну за допомогою: console.log

let zminna1 = 'hello';
let zminna2 = 'owu';
let zminna3 = 'com';
let zminna4 = 'ua';

console.log(zminna1)
console.log(zminna2)
console.log(zminna3)
console.log(zminna4)

let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let PI = 3.14;
let number5 = 2.7;
let number6 = 16;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(PI);
console.log(number5);
console.log(number6);

let bool1 = true;
let bool2 = false;

console.log(bool1)
console.log(bool2)

// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// // З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Oleksandr';
let middleName = 'Mazur';
let lastName = 'Volodimirovich';

let person = firstName + " " + middleName + " " + lastName;
console.log(person)


// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);


// // Додаткове для тих хто цікавився prompt`oм
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// // Імям, По-Батькові та роками. та вивести в консоль
//
let name = prompt('Введіть Імя', 'Alex');
console.log(name)
let last = prompt('Введіть Прізвище', 'Mazur');
const age = prompt('Введіть вік', 35);
console.log(typeof + age);
console.log(name, last, age);
console.log(`My name is: ${name} My lastNAme - ${last}`)
