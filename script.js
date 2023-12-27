let display = document.getElementById('display');
let expression = '';

function appendToDisplay(char) {
    expression += char;
    updateDisplay();
}

function calculate() {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = expression;
}