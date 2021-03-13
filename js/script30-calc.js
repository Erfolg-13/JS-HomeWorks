const signs = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', '.', 'AC', '/',
    '='
];


var textArea = document.getElementById('inputVal');

signs.forEach(function (sign) {
    var signElement = document.createElement('div');
    signElement.className = 'btn';
    signElement.innerHTML = sign;
    calc.appendChild(signElement);
});

document.querySelectorAll('#calc .btn').forEach(function (button) {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(event) {
    if (event.target.innerHTML === 'AC') {
        textArea.innerHTML = '';
    } else if (event.target.innerHTML === '=') {
        textArea.innerHTML = eval(textArea.innerHTML);
    } else {
        textArea.innerHTML += event.target.innerHTML;
    };
};





