
function sum(a, b) {
    return a + b;
}


export { sum };



function multiply(a, b) {
    return a * b;
}

export { multiply };





function subtract(a, b) {
    return a - b;
}


function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}


export { subtract, divide };
