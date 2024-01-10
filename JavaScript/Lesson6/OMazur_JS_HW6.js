// - Знайти та вивести довижину наступних стрінгових значень
let massive1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
massive1.map((item) => console.log(item.length));

// - Перевести до великого регістру наступні стрінгові значення
let massive2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
massive2.map((item) => console.log(item.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
let massive3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
massive3.map((item) => console.log(item.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string1 = ' dirty string   ';
console.log(string1.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let string2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');

let massive4 = stringToarray(string2);
console.log(massive4);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let numtostring = numbers.map((num) => num.toString())
console.log(numtostring);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let numsbers2 = [11, 21, 3];
const sortNums = (arr, order) => {
    switch (order) {
        case 'ascending':
            return arr.sort((a, b) => a - b);
        case 'descending':
            return arr.sort((a, b) => b - a);
    }
}
console.log(sortNums(numsbers2, 'ascending')); // [3,11,21]
console.log(sortNums(numsbers2, 'descending')); // [21,11,3]

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((course) => course.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));

// =========================
// описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamonds', value: '6', color: 'black'},
    {cardSuit: 'diamonds', value: '7', color: 'black'},
    {cardSuit: 'diamonds', value: '8', color: 'black'},
    {cardSuit: 'diamonds', value: '9', color: 'black'},
    {cardSuit: 'diamonds', value: '10', color: 'black'},
    {cardSuit: 'diamonds', value: 'jack', color: 'black'},
    {cardSuit: 'diamonds', value: 'queen', color: 'black'},
    {cardSuit: 'diamonds', value: 'king', color: 'black'},
    {cardSuit: 'diamonds', value: 'ace', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'red'},
]
// - знайти піковий туз
console.log(cards.find((card) => card.cardSuit === 'spade' && card.value === 'ace' && card.color === 'black'));
// - всі шістки
console.log(cards.filter((card) => card.value === '6'));
// - всі червоні карти
console.log(cards.filter((card) => card.color === 'red'));
// - всі буби
console.log(cards.filter((card) => card.cardSuit === 'diamonds'));
// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value) && card.color === 'red'));
//
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let result = cards.reduce((acc, cur) => {
    if (!acc[cur.cardSuit]) {
        acc[cur.cardSuit] = [];
    }
    acc[cur.cardSuit].push(cur);
    return acc;
}, {});
console.log(result);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes('docker')));

