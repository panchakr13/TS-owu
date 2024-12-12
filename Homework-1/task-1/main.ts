// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting : string = 'hello';
let owu : string = 'owu';
let com : string = 'com';
let ua : string = 'ua';
let a : number = 1;
let b : number = 10;
let c : number = -999;
let e : number = 123;
let pi : number = 3.14;
let f : number = 2.7;
let g : number = 16;
let booleanT : boolean = true;
let booleanF : boolean = false;

console.log(greeting, owu, com, ua, a, b, c, e, pi, f, g, booleanT, booleanF);
//
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let  firstName : string = 'Roman';
let middleName : string = 'Olegovich';
let lastName : string = 'Panchak';

let person : string = firstName + ' ' + middleName + ' ' + lastName;
console.log(person)


//
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 : number = 100;
let b1 : string = '100';
let c1 : boolean= true;

console.log(typeof(a1), typeof (b1), typeof (c1));

//
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let userFirstName : string = prompt('Write your First Name: ');
let userMiddleName : string = prompt('Write your Middle Name: ');
let userLastName : string = prompt('Write your Last Name: ');

console.log(`Name - ${userFirstName}, Middle Name - ${userMiddleName}, Last Name - ${userLastName}`);


