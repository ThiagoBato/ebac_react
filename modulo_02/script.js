const textField = document.getElementById('field');

let number0 = document.getElementById('number0');
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let number3 = document.getElementById('number3');
let number4 = document.getElementById('number4');
let number5 = document.getElementById('number5');
let number6 = document.getElementById('number6');
let number7 = document.getElementById('number7');
let number8 = document.getElementById('number8');
let number9 = document.getElementById('number9');
let dot = document.getElementById('dot');

let add = document.getElementById('add');
let decrease = document.getElementById('decrease');
let multiplication = document.getElementById('multiplication');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

number0.addEventListener('click', () => (textField.value += 0));
number1.addEventListener('click', () => (textField.value += 1));
number2.addEventListener('click', () => (textField.value += 2));
number3.addEventListener('click', () => (textField.value += 3));
number4.addEventListener('click', () => (textField.value += 4));
number5.addEventListener('click', () => (textField.value += 5));
number6.addEventListener('click', () => (textField.value += 6));
number7.addEventListener('click', () => (textField.value += 7));
number8.addEventListener('click', () => (textField.value += 8));
number9.addEventListener('click', () => (textField.value += 9));
dot.addEventListener('click', () => (textField.value += '.'));

add.addEventListener('click', () => (textField.value += ' + '));
decrease.addEventListener('click', () => (textField.value += ' - '));
multiplication.addEventListener('click', () => (textField.value += ' * '));
divide.addEventListener('click', () => (textField.value += ' / '));
clear.addEventListener('click', () => (textField.value = ' '));

let result;
let inputHasString;

function calculatorResult() {
    result = textField.value.replace(/[^-\d/*+.]/g, '');
    inputHasString = eval(result);
    if (typeof inputHasString !== 'number') {
        textField.value = '';
        textField.placeholder = 'Digite apenas números';
    } else return (textField.value = eval(result));
}
equal.addEventListener('click', () => calculatorResult());
textField.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) calculatorResult();
});
