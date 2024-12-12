// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123,
// 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
var greeting = 'hello';
var owu = 'owu';
var com = 'com';
var ua = 'ua';
var a = 1;
var b = 10;
var c = -999;
var e = 123;
var pi = 3.14;
var f = 2.7;
var g = 16;
var booleanT = true;
var booleanF = false;
console.log(greeting, owu, com, ua, a, b, c, e, pi, f, g, booleanT, booleanF);
//
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
var firstName = 'Roman';
var middleName = 'Olegovich';
var lastName = 'Panchak';
var person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
//
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
var a1 = 100;
var b1 = '100';
var c1 = true;
console.log(typeof (a1), typeof (b1), typeof (c1));
//
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
var userFirstName = prompt('Write your First Name: ');
var userMiddleName = prompt('Write your Middle Name: ');
var userLastName = prompt('Write your Last Name: ');
console.log("Name - ".concat(userFirstName, ", Middle Name - ").concat(userMiddleName, ", Last Name - ").concat(userLastName));
