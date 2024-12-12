// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let numbers : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let elements : Array<any> = ['first', 'second', 3, 4, 5, 6, 7, 8, true, false];

for (let num of numbers){
    console.log(num)
}

for (let element of elements){
    console.log(element)
}


//
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

interface Book {
    title: string;
    pageCount : number;
    genre: string;
}

let firstBook : Book = {
    title : 'Shadows of Eternity',
    pageCount : 345,
    genre : 'Fantasy'
};

let secondBook : Book = {
    title : 'The Quantum Enigma',
    pageCount : 280,
    genre : 'Science Fiction'
};

let thirdBook : Book = {
    title : 'Whispers in the Ashes',
    pageCount : 420,
    genre : 'Thriller'
};

console.log(firstBook, secondBook, thirdBook)

//
//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

interface Author {
    name : string;
    age : number;
}
interface BookWithAuthor{
    title : string;
    pageCount : number;
    genre : string;
    authors: Author[]
}

let firstBookWithAuthor : BookWithAuthor = {
    title : 'Shadows of Eternity',
    pageCount : 345,
    genre : 'Fantasy',
    authors : [
        {name: 'Emily Carter', age: 37}
    ]
};

let secondBookwithAuthor : BookWithAuthor = {
    title : 'The Quantum Enigma',
    pageCount : 280,
    genre : 'Science Fiction',
    authors : [
        {name: 'James Whitmore', age: 45}
    ]
};

let thirdBookwithAuthor : BookWithAuthor = {
    title : 'Whispers in the Ashes',
    pageCount : 420,
    genre : 'Thriller',
    authors : [
        {name: 'Sarah Blake', age: 50}
    ]
};

console.log(firstBookWithAuthor, secondBookwithAuthor, thirdBookwithAuthor)
//
//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.Вивести в консоль пароль кожного користувача
interface User {
    name : string;
    username : string;
    password : string;
}

let users : User[] = [
    {name: 'u1', username: 'u1', password: 'u1$'},
    {name: 'u2', username: 'u2', password: 'u2$'},
    {name: 'u3', username: 'u3', password: 'u3$'},
    {name: 'u4', username: 'u4', password: 'u4$'},
    {name: 'u5', username: 'u5', password: 'u5$'},
    {name: 'u6', username: 'u6', password: 'u6$'},
    {name: 'u7', username: 'u7', password: 'u7$'},
    {name: 'u8', username: 'u8', password: 'u8$'},
    {name: 'u9', username: 'u9', password: 'u9$'},
    {name: 'u10', username: 'u10', password: 'u10$'}
]

users.forEach(user => {
    console.log(user.password)
})
//
// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно
// подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу

let temperatures : number[][] = [
    [1, 2, 3], // monday [morning, afternoon, evening]
    [1, 2, 3], // tuesday
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]

];

console.log(temperatures[0][2])
//
// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x : number = -3;

if (x !== 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}
//
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time : number = 15;

if (time >= 0 && time <= 14) {
    console.log("Перша чверть години");
} else if (time >= 15 && time <= 29) {
    console.log("Друга чверть години");
} else if (time >= 30 && time <= 44) {
    console.log("Третя чверть години");
} else if (time >= 45 && time <= 59) {
    console.log("Четверта чверть години");
} else {
    console.log("e");
}

//
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day: number = 31; // Число від 1 до 31

if (day > 0 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада місяця");
} else {
    console.log("e");
}
//
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber: number = 7;

switch (dayNumber) {
    case 1:
        console.log('Monday');
        break

    case 2:
        console.log('Tuesday');
        break

    case 3:
        console.log('Wednesday');
        break

    case 4:
        console.log('Thursday');
        break

    case 5:
        console.log('Friday');
        break

    case 6:
        console.log('Saturday');
        break

    case 7:
        console.log('Sunday')
        break

    default:
        console.log('e')
        break
}
//
//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 : number = 1;
let num2 : number = 1;

if (num1 > num2){
    console.log(`Max num: ${num1}`)
} else if (num2 > num1){
    console.log(`Max num: ${num2}`)
} else {
    console.log(`${num1} = ${num2}`)
}

//
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
//     falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1: any = undefined;
x1 = x1 || 'default';
console.log(x1)
//
//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф
//     перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців
//     вивести в консоль "Супер".

let coursesAndDurationArray : {title: string; monthDuration: number}[]  = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray){
    if (course.monthDuration > 5){
        console.log(`${course.title} - Super`)
    }
}



