function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;
    let result;

    if (expression.includes('+')) {
        const numbers = expression.split('+');
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if (expression.includes('-')) {
        const numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if (expression.includes('*')) {
        const numbers = expression.split('*');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if (expression.includes('/')) {
        const numbers = expression.split('/');
        if (parseFloat(numbers[1]) === 0) {
            result = 'Error'; // Handle division by zero
        } else {
            result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        }
    } else {
        result = 'Error'; // Invalid expression
    }

    display.value = result;
}