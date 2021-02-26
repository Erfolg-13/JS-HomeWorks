// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function checkNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
const number1 = prompt('Please enter the first number.', '');
const number2 = prompt('Please enter the second number.', '');
console.log(checkNumbers(number1, number2));

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
function calcFactorial(number) {
    return (number !== 1) ? (number * calcFactorial(number - 1)) : 1;
}

const number = parseInt(prompt('Please enter the positive number to calculate its a factorial.', ''));
console.log(calcFactorial(number));

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
const number1 = prompt('Please enter the first number.', '');
const number2 = prompt('Please enter the second number.', '');
const number3 = prompt('Please enter the third number.', '');
createNumber(number1, number2, number3);

function createNumber(number1, number2, number3) {
    let result;
    result = number1 + number2 + number3;
    console.log('You create the number' + ':' + result);
}

// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
const length = parseInt(prompt('Please enter the length of rectagle.', '0'));
const width = parseInt(prompt('Please enter the width of rectagle.', '0'));
calcSquare(length, width);

function calcSquare(length, width) {
    let result;
    if (length > 0, width > 0) {
        result = length * width;
    } else if (length > 0, width = 0) {
        width == length;
        result = length * width;
    } else if (length = 0, width > 0) {
        length == width;
        result = length * width;
    } else {
        console.log('Please enter the correct data', '')
    }
    console.log('The square is ' + result);
}

// 5. Написать функцию, которая проверяет, является ли переданное ей число  СОВЕРШЕННЫМ. Совершенное число – это число, равное сумме всех своих собственных делителей.
const number = parseInt(prompt('Please enter the number.', ''));

function calcPerfectNumber(number) {
    let remindor;
    let sum = 0;
    for (i = 1; i < number; i++) {
        remindor = number % i;
        if (remindor == 0) {
            sum += i;
        }
    }
    if (number == sum) {
        console.log(number + ' is a perfect number!');
    } else {
        console.log(number + ' is NOT a perfect number.');
    }
}
calcPerfectNumber(number);

// 6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
const firstNubmer = prompt('Enter the first number to start the rage', '');
const secondNumber = prompt('Enter the second number to end the range.', '');

function getPerfectNumberFromARange(firstNubmer, secondNumber) {
    for (r = firstNubmer; r <= secondNumber; r++) {
        console.log(r);
        return calcPerfectNumber(r);
    }
}
getPerfectNumberFromARange(firstNubmer, secondNumber);

// 7. Написать функцию, которая принимает время(часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс».Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00.
const hours = prompt('Please point what hour is it?', '00');
const minutes = prompt('Please point minutes.', '00');
const seconds = prompt('Please point seconds.', '00');

function getTime(hours, minutes, seconds) {
    console.log(hours + ':' + minutes + ':' + seconds);
}

getTime(hours, minutes, seconds);

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const hours = prompt('Please point what hour is it?', '00');
const minutes = prompt('Please point minutes.', '00');
const seconds = prompt('Please point seconds.', '00');

function getSeconds(hours, minutes, seconds) {
    let M = minutes * 60;
    let H = hours * 3600;
    let result = 0;
    result = M + H + +seconds;
    console.log(`time ${hours}:${minutes}:${seconds}=${result} seconds`);
}
getSeconds(hours, minutes, seconds);

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч: мм: сс».

const seconds = prompt('Please enter the amount of seconds', '');
function getTime(seconds) {
    let h = seconds / 3600 ^ 0;
    let m = (seconds - h * 3600) / 60 ^ 0;
    let s = seconds - h * 3600 - m * 60;
    console.log((h < 10 ? '0' + h : h) + 'h:' + (m < 0 ? '0' + m : m) + 'm:' + (s < 0 ? '0' + s : s) + 's:');
}
getTime(seconds);

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
