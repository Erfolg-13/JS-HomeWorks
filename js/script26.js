// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит
// название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

const shoppingList = [
    { name: 'copybooks', amount: 10, availability: true, },
    { name: 'pens', amount: 3, availability: false, },
    { name: 'pencils', amount: 3, availability: false, },
    { name: 'bag', amount: 1, availability: true, },
];

console.log(availabilityShoppingList); // Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
addProduct('bag'); // Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
boughtedProduct('pencil'); // Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
console.log(shoppingList);

let availabilityShoppingList = shoppingList.sort(function (a, b) {
    if (a.availability < b.availability)
        return -1;
    if (a.availability > b.availability)
        return 1;
});

function addProduct(productName) {
    const productShoppingList = shoppingList.find((list) => {
        return productName === list.name;
    });
    if (productShoppingList) {
        productShoppingList.amount += 1;
    } else {
        shoppingList.push({
            name: productName,
            amount: 1,
            availability: false,
        })
    }
};

function boughtedProduct(productName) {
    const boughted = shoppingList.find((list) => {
        return list.name === productName;
    });
    boughted ? boughted.availability = true : console.log("There is any product with such name in this shopping list. Please, point a correct name.");
};


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
const shoppingReceipt = [
    { name: 'water', amount: 3, priceUnit: 18, },
    { name: 'lemon', amount: 2, priceUnit: 10, },
    { name: 'bread', amount: 1, priceUnit: 15, },
    { name: 'snickers', amount: 1, priceUnit: 12, },
    { name: 'mars', amount: 2, priceUnit: 12, },
]
console.table(shoppingReceipt); //Распечатка чека на экран;
console.log('Total price: ' + calcTotalPrice + ' UAH'); // Подсчет общей суммы покупки;
//Получение самой дорогой покупки в чеке:
console.log(`The most expensive product in this receipt is ${maxPricePosition[0].name} - ${maxPricePosition[0].price} UAH`);
console.log(`The average price of unit in this receipt is ${averagePrice(shoppingReceipt)}`); //Подсчет средней стоимости одного товара в чеке.

let calcTotalPrice = shoppingReceipt.reduce((start, list) => {
    return start + list.price;
}, 0);

const maxPricePosition = shoppingReceipt.sort(function (a, b) {
    return b.price - a.price;
});

function averagePrice(shoppingReceipt) {
    return result = (calcTotalPrice / shoppingReceipt.length).toFixed();
};

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
const textCss = [
    { 'font-size': '16px' },
    { 'font-weight': 'bold' },
    { 'color': 'rgb(161, 117, 117)' },
    { 'text-align': 'center' },
    { 'text-decoration': 'underline' },
    { 'min-height': '800px' },
    { 'letter-spacing': '1px' },
];

const text = 'Использование метода document.write';

function showTextWithStyle(array, text) {
    let styles = '';
    textCss.forEach(element => {
        for (let key in element) {
            styles = styles + `${key}: ${element[key]}`;
        };
    });
    console.log(`<p style = ${styles}>${text}</p>`);
};

showTextWithStyle(textCss, text);

