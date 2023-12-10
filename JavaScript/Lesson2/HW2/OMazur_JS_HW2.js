// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [1,-50,5,733, true, 'Alex', false, [1,54,546]];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
//
//


// // // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// //
// let book1 = {
//     title: 'Tina and Teresa',
//     pageCount: 158,
//     genre: 'Romance'
// }
// let book2 = {
//     title: 'Numbers Magic',
//     pageCount: 43,
//     genre: 'Math, Psyhology'
// }
// let book3 = {
//     title: 'Winter Quin',
//     pageCount: 32,
//     genre: 'Tales'
// }
//
// console.log(book1)
// console.log(book2)
// console.log(book3)

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// // Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//

//
//     let book01 = {
//     title: 'Tina and Teresa',
//     pageCount: 158,
//     genre: 'Romance',
//     author: [{name:'Igor', age: 54}, {name:'Vasia', age: 25}]
// }
// let book02 = {
//     title: 'Numbers Magic',
//     pageCount: 43,
//     genre: 'Math, Psyhology',
//     author: [{name:'Olena', age: 32}, {name:'Ivan', age: 41}]
// }
// let book03 = {
//     title: 'Winter Quin',
//     pageCount: 32,
//     genre: 'Tales',
//     author: [{name:'Ira', age: 23}, {name:'Ostap', age: 36}]
// }
// console.log(book01);
// console.log(book02);
// console.log(book03);
//
// // - Створити масив з 10 об'єктами які описують сутніть "користувач".
// // Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// let usersArr = [
//     {name: 'Max',  userName: 'Maxik', password: 1237356},
//     {name: 'Ira', userName: 'Koroleva', password: 116457},
//     {name: 'Oleg', userName: 'Zadrot', password: 19758},
//     {name: 'Vasia', userName: 'Moriak', password: 1237859},
//     {name: 'Petia', userName: 'PLannn', password: 1795500},
//     {name: 'Orest', userName: 'Sniper', password: 12793400},
//     {name: 'Olena', userName: 'Aktivistka', password: 178634500},
//     {name: 'Olga', userName: 'Kolushnja', password: 17967500},
//     {name: 'Ostap', userName: 'Karakyl', password: 127824500},
//     {name: 'Sasha', userName: 'Marlboro', password: 1100500},
// ];
//
// console.log(usersArr[0].name + "'s" + ' password: ' + usersArr[0].password);
// console.log(usersArr[1].name + "'s" + ' password: ' + usersArr[1].password);
// console.log(usersArr[2].name + "'s" + ' password: ' + usersArr[2].password);
// console.log(usersArr[3].name + "'s" + ' password: ' + usersArr[3].password);
// console.log(usersArr[4].name + "'s" + ' password: ' + usersArr[4].password);
// console.log(usersArr[5].name + "'s" + ' password: ' + usersArr[5].password);
// console.log(usersArr[6].name + "'s" + ' password: ' + usersArr[6].password);
// console.log(usersArr[7].name + "'s" + ' password: ' + usersArr[7].password);
// console.log(usersArr[8].name + "'s" + ' password: ' + usersArr[8].password);
// console.log(usersArr[9].name + "'s" + ' password: ' + usersArr[9].password);

//
// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// //     Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = -2;
// if(x !== 0){
//     console.log('Вірно')
// }else {
//     console.log("Невірно")
// }

//
//
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// // до якої четверті години попадає число (в першу, другу, третю или четверту частину години).
//
// let time = 59.9;
//
// if (time > 45 && time <=60){
//     console.log('четверта чверть')
// }else if(time > 30 && time <=45){
//     console.log('третя чверть')
// }else if(time > 15 && time <=30){
//     console.log('друга чверть')
// }else if(time > 0 && time <=15){
//     console.log('перша чверть')
// }else{
//     console.log('Невірні дані')
// }

//
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// // місяця потрапляє це число (у першу, другу чи третю).
//
// let day = -5;
//
// if (day > 21 && day <=31 ){
//     console.log('Третя декада')
// }else if(day > 11 && day <=20){
//     console.log('Друга декада')
// }else if(day > 0 && day <=10){
//     console.log('Перша декада')
// }else {
//     alert('Некоректний день місяця')
//     console.log('ERROR')
// }
//
//
//
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// // відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// let week = +prompt('Enter number of week', 5);
// switch (week){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//
//     default:
//         console.log('ERROR')
// }
//
//
// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
// let num1 = 35;
// let num2 = +prompt('Введіть число', 1);
// if (num1 === num2){
//     console.log('Числа рівні')
// }else if(num1 > num2){
//     console.log('MAX is: ' + num1)
// }else{
//     console.log('MAX is: ' + num2)
// }
// //
//
// //     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// //     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
// //     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
/
//
// //     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// //     За допомоги іф перевірити кожен його елемент на тривалість навчання.
// //     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
// let array = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if(array[0].monthDuration >= 5){console.log('Supper - course is cool!')};
// if(array[1].monthDuration >= 5){console.log('Supper - course is cool!')};
// if(array[2].monthDuration >= 5){console.log('Supper - course is cool!')};
// if(array[3].monthDuration >= 5){
//     console.log('Supper - course is cool!')
// }else{
//     console.log('Course min 4')
// }
// if(array[4].monthDuration >= 5){console.log('Supper - course is cool!')};
// if(array[5].monthDuration >= 5){
//     console.log('Supper - course is cool!')
// }else{
//     console.log('Course min 4')
// }