/* 1. Запросить у пользователя его возраст и определить, кем он является:
 ребенком (0–2),
 подростком (12–18),
 взрослым (18_60) или пенсионером (60– ...).*/

let userAge = prompt('Сколько Вам лет?', '');
if (userAge < 2) {
    message = 'младенец';
} else if (userAge < 12) {
    message = 'ребенок';
} else if (userAge < 18) {
    message = 'подросток';
} else if (userAge < 60) {
    message = 'взрослый';
} else {
    message = 'пенсионер';
}
console.log(message);

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const number = prompt('Enter the number from 0 to 9.');
switch (number) {
    case '0': {
        console.log('/');
    } break;
    case '1': {
        console.log('!');
    } break;
    case '2': {
        console.log('@');
    } break;
    case '3': {
        console.log('#');
    } break;
    case '4': {
        console.log('$');
    } break;
    case '5': {
        console.log('%');
    } break;
    case '6': {
        console.log('^');
    } break;
    case '7': {
        console.log('&');
    } break;
    case '8': {
        console.log('*');
    } break;
    case '9': {
        console.log('(');
    } break;
    default: {
        console.log('Please enter the number only from 0 to 9.');
    }
}

/*3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.*/
// Знайшла рішення, але не розібралась ще
// console.log(prompt(`Введите трехзначное число:`).split``.filter((e, i, a) => a.join``.indexOf(e) !== a.join``.lastIndexOf(e)).join``.trim() === `` ? `Совпадений не найдено` : `Найдено совпадение цифр`);
//     ***
// const number = prompt('Введите трехзначное число для проверки', '222').split('');
// let firstSymbol = strings[0];
// let secondSymbol = strings[1];
// let thirdSybol = strings[3];
// (firstSymbol == secondSymbol) || (firstSymbol == thirdSybol) || (secondSymbol == thirdSybol) ? console.log('Есть совпаденияю.') : console.log('Совпадений нет.');

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const year = parseInt(
    prompt('Введите год.', '2021'),
);
if (
    (year % 4 == 0)
    || (year % 400 == 0)
    && (year % 100 !== 0)
) {
    console.log(`${year} год - высокосный.`);
} else {
    console.log(`${year} год - не высокосный.`);
}

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const number = prompt('Введите сумму в USD', '100');
const currency = prompt('Укажите валюту для конвертации: EUR, UAH, AZN.', 'UAH');
userNumber = parseInt(number);
let eur = userNumber * 0.82;
let uah = userNumber * 27.91;
let azn = userNumber * 1.70;
if (currency == 'EUR') {
    console.log(`EUR${eur}`);
} else if (currency == 'UAH') {
    console.log(`UAH${uah}`);
} else if (currency == 'AZN') {
    console.log(`AZN${azn}`);
} else {
    console.log('Валюта указана неверно. Пожалуйста, сделайте Ваш выбор: EUR, UAH, AZN.');
}

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//  от 200 до 300 – скидка будет 3%, 
//  от 300 до 500 – 5%, 
//  от 500 и выше – 7%.

let priceTotal = prompt('Enter please  the total purches amount in UAH.', '200');
if (priceTotal < 200) {
    message = `Unfortunately You have any discount, please pay UAH${priceTotal}`
} else if (priceTotal < 300) {
    let priceWithDiscount = priceTotal - (priceTotal * 3 / 100);
    message = `You have a discount 3%, please pay UAH${priceWithDiscount}`;
} else if (priceTotal < 500) {
    let priceWithDiscount = priceTotal - (priceTotal * 5 / 100);
    message = `You have a discount 5%, please pay UAH${priceWithDiscount}`;
} else if (priceTotal >= 500) {
    let priceWithDiscount = priceTotal - (priceTotal * 7 / 100);
    message = `You have a discount 7%, please pay UAH${priceWithDiscount}`;
}
console.log(message);

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.



