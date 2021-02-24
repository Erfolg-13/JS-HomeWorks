// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let start = prompt('Please enter the first number of rage.', '');
let end = prompt('Please the enter the last number of rage.', '');
let result = 0;

while (start <= end) {
    result += start;
    start++;
}
console.log(result);

// 2. Запросить 2 числа и найти только наибольший общий делитель.

const number1 = prompt('Please enter the first number.', '');
const number2 = prompt('Please enter the first number of rage.', '');
let greatestFactor;

for (let i = 1; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
        greatestFactor = i;
    }
}
console.log(`The greatest common factor of rumbers ${number1} and ${number2} is ${greatestFactor}`);

// 3. Запросить у пользователя число и вывести все делители этого числа.

const number = parseInt(prompt('Please enter the number.', ''));
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        console.log(i);
    }
}

// 4. Определить количество цифр в введенном числе.
const number = prompt('Please enter the number.', '');
console.log(number.length);

// 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
// const Number1 = prompt('It should be 10 numbers for statistics. Please enter the 1-st number.', '');
// const Number2 = prompt('Enter the 2-nd number.', '');
// const Number3 = prompt('Enter the 3-d number.', '');
// const Number4 = prompt('Enter the 4-th number.', '');
// const Number5 = prompt('Enter the 5-th number.', '');
// const Number6 = prompt('Enter the 6-th number.', '');
// const Number7 = prompt('Enter the 7-th number.', '');
// const Number8 = prompt('Enter the 8-th number.', '');
// const Number9 = prompt('Enter the 9-th number.', '');
// const Number10 = prompt('Enter the 10-th number.', '');

// 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
let firstNumber = prompt('Enter the first Number', '2');
let operator = prompt('Enter the operator: + , - , * , /', '+');
let secondNumber = prompt('Enter the second Number', '2');

let result;
while (questionToContinue = true) {
    switch (operator) {
        case '+': {
            result = +firstNumber + +secondNumber;
        }
        case '-': {
            result = firstNumber - secondNumber;
        }
        case '*': {
            result = firstNumber * secondNumber;
        }
        case '/': {
            result = firstNumber / secondNumber;
        }
    }
    console.log(`result: ${firstNumber}${operator}${secondNumber}=${result}`);
    let questionToContinue = confirm('Would you like to continue?', 'OK');
}









