// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var elements = ['first', 'second', 3, 4, 5, 6, 7, 8, true, false];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
for (var _a = 0, elements_1 = elements; _a < elements_1.length; _a++) {
    var element = elements_1[_a];
    console.log(element);
}
var firstBook = {
    title: 'Shadows of Eternity',
    pageCount: 345,
    genre: 'Fantasy'
};
var secondBook = {
    title: 'The Quantum Enigma',
    pageCount: 280,
    genre: 'Science Fiction'
};
var thirdBook = {
    title: 'Whispers in the Ashes',
    pageCount: 420,
    genre: 'Thriller'
};
console.log(firstBook, secondBook, thirdBook);
var firstBookWithAuthor = {
    title: 'Shadows of Eternity',
    pageCount: 345,
    genre: 'Fantasy',
    authors: [
        { name: 'Emily Carter', age: 37 }
    ]
};
var secondBookwithAuthor = {
    title: 'The Quantum Enigma',
    pageCount: 280,
    genre: 'Science Fiction',
    authors: [
        { name: 'James Whitmore', age: 45 }
    ]
};
var thirdBookwithAuthor = {
    title: 'Whispers in the Ashes',
    pageCount: 420,
    genre: 'Thriller',
    authors: [
        { name: 'Sarah Blake', age: 50 }
    ]
};
console.log(firstBookWithAuthor, secondBookwithAuthor, thirdBookwithAuthor);
var users = [
    { name: 'u1', username: 'u1', password: 'u1$' },
    { name: 'u2', username: 'u2', password: 'u2$' },
    { name: 'u3', username: 'u3', password: 'u3$' },
    { name: 'u4', username: 'u4', password: 'u4$' },
    { name: 'u5', username: 'u5', password: 'u5$' },
    { name: 'u6', username: 'u6', password: 'u6$' },
    { name: 'u7', username: 'u7', password: 'u7$' },
    { name: 'u8', username: 'u8', password: 'u8$' },
    { name: 'u9', username: 'u9', password: 'u9$' },
    { name: 'u10', username: 'u10', password: 'u10$' }
];
users.forEach(function (user) {
    console.log(user.password);
});
//
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно
// подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу
var temperatures = [
    [1, 2, 3], // monday [morning, afternoon, evening]
    [1, 2, 3], // tuesday
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];
console.log(temperatures[0][2]);
//
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
var x = -3;
if (x !== 0) {
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
var time = 15;
if (time >= 0 && time <= 14) {
    console.log("Перша чверть години");
}
else if (time >= 15 && time <= 29) {
    console.log("Друга чверть години");
}
else if (time >= 30 && time <= 44) {
    console.log("Третя чверть години");
}
else if (time >= 45 && time <= 59) {
    console.log("Четверта чверть години");
}
else {
    console.log("e");
}
//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
var day = 31; // Число від 1 до 31
if (day > 0 && day <= 10) {
    console.log("Перша декада місяця");
}
else if (day >= 11 && day <= 20) {
    console.log("Друга декада місяця");
}
else if (day >= 21 && day <= 31) {
    console.log("Третя декада місяця");
}
else {
    console.log("e");
}
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var dayNumber = 7;
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('e');
        break;
}
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
var num1 = 1;
var num2 = 1;
if (num1 > num2) {
    console.log("Max num: ".concat(num1));
}
else if (num2 > num1) {
    console.log("Max num: ".concat(num2));
}
else {
    console.log("".concat(num1, " = ").concat(num2));
}
//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
//     falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
var x1 = undefined;
x1 = x1 || 'default';
console.log(x1);
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
//     перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
//     вивести в консоль "Супер".
var coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (var _b = 0, coursesAndDurationArray_1 = coursesAndDurationArray; _b < coursesAndDurationArray_1.length; _b++) {
    var course = coursesAndDurationArray_1[_b];
    if (course.monthDuration > 5) {
        console.log("".concat(course.title, " - Super"));
    }
}
