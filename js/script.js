const buttons = document.querySelectorAll("button");
const currentText = document.getElementById("current-text");
const storedText = document.getElementById("stored-text");
const currentOperation = "";

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
    if (num2 == 0) {
        return "ERR";
    }
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
            break;
        default:
            return "ERR";
            break;
    }
}

function enterInput() {
    let value = this.textContent;
    // if (currentOperation == "") {

    // }
    console.log(value);
}

buttons.forEach(btn => btn.addEventListener("click", enterInput));



