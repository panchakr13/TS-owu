// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (var i_1 = 0; i_1 < 10; i_1++) {
    document.write('<div>Lorem ipsum dolor sit amet.</div>');
}
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (var i_2 = 0; i_2 < 10; i_2++) {
    document.write("<div>Lorem ipsum. and index: ".concat(i_2, "</div>"));
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
var i = 0;
while (i < 20) {
    document.write('<h1>lorem</h1>');
    i++;
}
//     #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
var j = 0;
while (j < 20) {
    document.write("<h1>lorem and index - ".concat(j, "</h1>"));
    j++;
}
//     #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
// <!--
//     і тд інші об'єкти масиву
//      ...
//      ...
//      ...
// -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write('<ul>');
for (var i_3 = 0; i_3 < listOfItems.length; i_3++) {
    document.write("<li>".concat(listOfItems[i_3], "</li>"));
}
document.write('</ul>');
var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    document.write("\n        <div class=\"product-card\">\n            <h3 class=\"product-title\">".concat(product.title, ". Price - ").concat(product.price, "</h3>\n            <img src=\"").concat(product.image, "\" alt=\"").concat(product.title, "\" class=\"product-image\">\n        </div>\n    "));
}
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user.status) {
        console.log(user);
    }
}
for (var _b = 0, users_2 = users; _b < users_2.length; _b++) {
    var user = users_2[_b];
    if (user.status === false) {
        console.log(user);
    }
}
for (var _c = 0, users_3 = users; _c < users_3.length; _c++) {
    var user = users_3[_c];
    if (user.age > 30) {
        console.log(user);
    }
}
