// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
let carModel = {
    Manufacturer: 'Fiat',
    Model: 'Fiat 500',
    Year: '2012',
    Speed: '90'
}
//Функция для вывода на экран информации об автомобиле;
function information(obj) {
    return obj;
}
information(carModel);
//Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
const amountOfKm = parseInt(prompt('Please enter amount of km to drive', ''));

function calcHoursForDrive(amountOfKm) {
    let hours;
    let relax;
    relax = 0;
    hours = amountOfKm / carModel.Speed;
    if (hours > 4) {
        relax = hours / 5;
        hours += Math.trunc(relax);
        console.log('You need ' + hours + ' h to drive ' + amountOfKm + ' km (including time to relax - ' + Math.trunc(relax) + ' h)');
    }
    else {
        console.log('You need ' + hours + ' h to drive ' + amountOfKm + 'km');
    }
}
calcHoursForDrive(amountOfKm);

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
const numerator = prompt('Please enter the numerator of the fraction', '');
const celebrity = prompt('Please enter the celebrity of the raction', '');

let fraction = {
    numerator: numerator,
    celebrity: celebrity
}
getSum(numerator, celebrity);      // Функция сложения 2-х объектов-дробей;
getSub(numerator, celebrity);      // Функция вычитания 2-х объектов-дробей;
getMul(numerator, celebrity);      // Функция умножения 2-х объектов-дробей;
getDiv(numerator, celebrity);      // Функция деления 2-х объектов-дробей;
getDividers(numerator, celebrity); // Функция сокращения объекта-дроби.

function getSum(numerator, celebrity) {
    let result;
    result = +numerator + +celebrity;
    console.log(`${numerator}+${celebrity}=` + result);
}

function getSub(numerator, celebrity) {
    let result;
    result = numerator - celebrity;
    console.log(`${numerator}-${celebrity}=` + result);
}

function getMul(numerator, celebrity) {
    let result;
    result = numerator * celebrity;
    console.log(`${numerator}*${celebrity}=` + result);
}

function getDiv(numerator, celebrity) {
    let result;
    result = numerator / celebrity;
    console.log(`${numerator}:${celebrity}=` + result);
}

function getDividers(numerator) {
    for (let d = 2; d <= numerator; d++) {
        if (numerator % d == 0) {
            console.log(`There are dividers of ${numerator}:` + d);
        }
    }
}

function getDividers(celebrity) {
    for (let i = 2; i <= celebrity; i++) {
        if (celebrity % i == 0) {
            console.log(`There are dividers of ${numerator}:` + i);
        }
    }
}

function getDividers(numerator, celebrity) {
    for (let d = 2; d <= numerator && celebrity; d++) {
        if (numerator % d == 0 && celebrity % d == 0) {
            console.log(`There are dividers of ${numerator} and ${celebrity}: ` + d);
        }
    }
}