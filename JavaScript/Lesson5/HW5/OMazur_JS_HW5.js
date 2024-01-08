// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const Skvadrat = (a, b) => a * b;
console.log(Skvadrat(7, 5));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
const Skolo = (r) => Math.PI * Math.pow(r,2);
console.log(Skolo(10));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const SCylindr = (r, h) => 2 * (Math.PI * Math.pow(r,2) + Math.PI * r * h );
console.log(SCylindr(6, 20));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
const jagijagi = (arr) => {
    for (const item of arr) {
        console.log('item : ', item);
    }
}

jagijagi([70, true, 'Alex', -940, null, 'null']);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraf = (text) => {
    document.write(`<p>${text}</p>`);
}

createParagraf('Okten Web School');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createUlka = (povidomlennja) => {
    document.write(`
        <ul>
            <li>${povidomlennja}</li>
            <li>${povidomlennja}</li>
            <li>${povidomlennja}</li>
        </ul>
    `);
}

createUlka('Java Script Lernen `-`');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUl2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

createUl2('Ukraina peremoge', 10);
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const createLi = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

createLi(['Kyiv', 100500, 'null', 'Lviv-Gamburg', true, 46456, false, '140500']);
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'Vasya', age: 31},
    {id: 2, name: 'Petya', age: 30},
    {id: 3, name: 'Kolya', age: 29},
    {id: 4, name: 'Olya', age: 28},
    {id: 5, name: 'Max', age: 30},
    {id: 6, name: 'Anya', age: 31},
    {id: 7, name: 'Oleg', age: 28},
    {id: 8, name: 'Andrey', age: 29},
    {id: 9, name: 'Masha', age: 30},
    {id: 10, name: 'Olga', age: 31},
    {id: 11, name: 'Maksim', age: 31}
];
const objArr = (arr) => {
    for (const user of arr) {
        document.write(`<div>${user.id}) ${user.name} - ${user.age} years old</div>`)
    }
}
objArr(users);
//
// // - створити функцію яка повертає найменьше число з масиву
let numbers = [-3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];
const minOfArr = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (min > num) min = num
    }
    return min;
}
console.log(minOfArr(numbers));

const minOfArr1 = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min;
}
console.log(minOfArr1(numbers));

// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}
console.log(sum([1, 12, 10, -5]));
//
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 2));

// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value
        }
    }
}

const currencies = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];

console.log(exchange(10000, currencies, 'USD'));
console.log(exchange(10000, currencies, 'EUR'));