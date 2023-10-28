
let display = document.getElementById('display');
let expression = '';

function append(value) {
    expression = expression + value;
    display.value = expression;
}

function cleardisplay() {
    expression = '';
    display.value = expression
}

function backspace() {
    expression = expression.substring(0, expression.length - 1);
    display.value = expression;
}

function calculate() {
    expression = eval(expression);
    display.value = expression;
}