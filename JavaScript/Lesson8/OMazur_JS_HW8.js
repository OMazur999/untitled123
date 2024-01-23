// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Alex', 'Mazur', 'alex@proton.me', '+380971548763'),
    new User(2, 'Khrystyna', 'Minchenko', 'Khrystyna@gmail.com', '+380979856147'),
    new User(3, 'Igor', 'Blaguj', 'Igor@gmail.com', '+380973254781'),
    new User(4, 'Irina', 'Krasij', 'Irina@proton.me', '+380969874513'),
    new User(5, 'Arkadij', 'Tyz', 'Arkadij@gmail.com', '+380973214982'),
    new User(6, 'Olena', 'Klumenko', 'Olena@gmail.com', '+380995478658'),
    new User(7, 'Anton', 'Tischenko', 'Anton@proton.me', '+380953698710'),
    new User(8, 'Kokos', 'Sokovytyj', 'Kokos@gmail.com', '+380936546541'),
    new User(9, 'Sergij', 'Mydruj', 'Sergij@gmail.com', '+380993215632'),
    new User(10, 'Sabrina', 'Princesivna', 'Sabrina@proton.me', '+380936541226'),
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter((user) => !(user.id % 2)));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((u1, u2) => u1.id - u2.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['joghurt', 'banana', 'Chokolade','pencil', 'lamp', 'tetris','clock', 'cup', 'printer']),
    new Client(1, 'Alex', 'Mazur', 'alex@proton.me', '+380971548763', ['banana', 'Chokolade','pencil']),
    new Client(2, 'Khrystyna', 'Minchenko', 'Khrystyna@gmail.com', '+380979856147', ['joghurt', 'banana', 'tetris']),
    new Client(3, 'Igor', 'Blaguj', 'Igor@gmail.com', '+380973254781', ['lamp', 'tetris','clock']),
    new Client(4, 'Irina', 'Krasij', 'Irina@proton.me', '+380969874513', ['cup', 'printer']),
    new Client(5, 'Arkadij', 'Tyz', 'Arkadij@gmail.com', '+380973214982', ['Chokolade','pencil', 'lamp', 'tetris']),
    new Client(6, 'Olena', 'Klumenko', 'Olena@gmail.com', '+380995478658', ['tetris','clock', 'cup']),
    new Client(7, 'Anton', 'Tischenko', 'Anton@proton.me', '+380953698710', ['banana','tetris', 'cup', 'printer']),
    new Client(8, 'Kokos', 'Sokovytyj', 'Kokos@gmail.com', '+380936546541', ['joghurt', 'banana', 'lamp', 'tetris']),
    new Client(9, 'Sergij', 'Mydruj', 'Sergij@gmail.com', '+380993215632', ['Chokolade', 'lamp', 'tetris', 'cup']),
    new Client(10, 'Sabrina', 'Princesivna', 'Sabrina@proton.me', '+380936541226', ['joghurt', 'Chokolade','pencil', 'tetris','clock', 'printer']),
]
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((c1, c2) => c1.order.length - c2.order.length));

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log('Information of this car')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('engine : ', this.engine);
        console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
        console.log('driver : ', this.driver);
        console.log('Information of this car')
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newYear) {
        this.year = newYear;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

const car1 = new Car1('Q8', 'Audi', 2023, 280, 4);
car1.drive();
car1.increaseMaxSpeed(12);
car1.changeYear(2019);
car1.addDriver({name: 'Alex', age: 35, exp: 15});
car1.info();

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        console.log('Information of this car')
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('engine : ', this.engine);
        console.log(`driver : ${this.driver?.name} | ${this.driver?.age}`);
        console.log('driver : ', this.driver);
        console.log('Information of this car')
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newYear) {
        this.year = newYear;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}
const car2 = new Car2('Q3', 'Audi', 2018, 210, 3);
car2.drive();
car2.increaseMaxSpeed(20);
car2.changeYear(2017);
car2.addDriver({name: 'Ivan', age: 20, exp: 2});
car2.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Etalon {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Cinderela extends Etalon {
    constructor(name, age, footSize) {
        super(name, age)
        this.footSize = footSize;
    }
}

const CinderelaARR = [
    new Cinderela('Irina', 18, 35),
    new Cinderela('Olena', 23, 37),
    new Cinderela('Olga', 24, 38),
    new Cinderela('Inga', 31, 40),
    new Cinderela('Khrystyna', 19, 36),
    new Cinderela('Oksana', 20, 41),
    new Cinderela('Maria', 19, 35),
    new Cinderela('Solomiia', 26, 38),
    new Cinderela('Natalia', 19, 37),
    new Cinderela('Angelina', 39, 41),
];

class Prince extends Etalon {
    constructor(name, age, bootSize) {
        super(name, age)
        this.bootSize = bootSize;
    }

    findCinderella1(arr) {
        if (!this.bootSize) throw new Error('Не та сама)')
        for (const Cinderela of arr) {
            if (Cinderela.footSize === this.bootSize) {
                return Cinderela;
            }
        }
    }

    findCinderella2(arr) {
        if (!this.bootSize) throw new Error('Не та сама')
        return arr.find((Cinderela) => Cinderela.footSize === this.bootSize);
    }
}

const prince1 = new Prince('Oleksandr', 25, 40);

try {
    const cinderella1 = prince1.findCinderella1(CinderelaARR);
    console.log('cinderella1: ', cinderella1);
} catch (e) {
    console.error(e.message);
}

const prince2 = new Prince('Oleksandr', 35, 38);

try {
    const cinderella2 = prince2.findCinderella2(CinderelaARR);
    console.log('cinderella2: ', cinderella2);
} catch (e) {
    console.error(e.message);
}