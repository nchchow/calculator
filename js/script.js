// global variables
var displayValue = 0;

// display
const updateDisplay = value => {
    const display = document.querySelector('#result');
    if(display.textContent === '0') {
        display.textContent = '';
    }
    display.textContent += value;
}

const clr = () => {
    const display = document.querySelector('#result');
    display.textContent = '0';
}

// operations
const add = (a, b) => (a + b);

const subtract = (a, b) => (a - b);

const multiply = (a, b) => (a * b);

const divide = (a, b) => (a / b);

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}
