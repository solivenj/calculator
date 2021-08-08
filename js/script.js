const buttons = document.getElementById("buttons");
const currentText = document.getElementById("current-text");
const storedText = document.getElementById("stored-text");
const numbers = buttons.querySelectorAll(".numbers");
const acButton = buttons.querySelector("#ac");
const cButton = buttons.querySelector("#c");
const negativeButton = buttons.querySelector("#negative");
const operators = buttons.querySelectorAll(".operator");
const equals = document.getElementById("equals");

let firstNum = undefined;
let operation = undefined;
let secondNum = undefined;
let resetScreen = undefined;

const numbersList = [...numbers];
numbersList.push(negativeButton)

numbersList.forEach(number => number.addEventListener("click", enterInput));
operators.forEach(operator => operator.addEventListener("click", handleOperator));
equals.addEventListener('click', handleEquals);
cButton.addEventListener("click", deleteInput);

acButton.addEventListener('click', clearCalc);


const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => !num2 ? "ERR" : num1 / num2;

function operate(num1, operator, num2) {
    let result = 0;
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '÷':
            result = divide(num1, num2);
            break;
        default:
            result = "ERR";
            break;
    }

    return result;
}

function handleNegative() {
    if (currentText.textContent[0] == "-") {
        currentText.textContent = currentText.textContent.slice(1);
    } else {
        currentText.textContent = "-" + currentText.textContent;
    }
}

function setFontSize() {
    let fontSize = "";

    if (currentText.textContent.length <= 6) {
        fontSize = "5em";
    } else if (currentText.textContent.length <= 7) {
        fontSize = "4.25em";
    } else if (currentText.textContent.length <= 8) {
        fontSize = "4em";
    } else if (currentText.textContent.length <= 9) {
        fontSize = "3.75em";
    }

    currentText.style.fontSize = fontSize;
}

function enterInput() {
    let value = this.textContent;
    
    if (!operation) {
        if (currentText.textContent == "0") {
            value == "+/-" ? handleNegative() : currentText.textContent = value;
        } else if (currentText.textContent == "-0") {
            value == "+/-" ? handleNegative() : currentText.textContent = currentText.textContent[0] + value;
        } else if (currentText.textContent.length < 9) {
            value == "+/-" ? handleNegative() : currentText.textContent += value;
            setFontSize();
        } else {
            if (value == "+/-") handleNegative();
            currentText.textContent.length <= 9 ? setFontSize() : currentText.style.fontSize = "3.5em";
        }
    } else {
        if (currentText.textContent == firstNum) {
            currentText.textContent = "0";
            value == "+/-" ? handleNegative() : currentText.textContent = value;
        } else if (currentText.textContent.length < 9) {
            value == "+/-" ? handleNegative() : currentText.textContent += value;
            setFontSize();
        } else {
            if (value == "+/-") handleNegative();
            currentText.textContent.length <= 9 ? setFontSize() : currentText.style.fontSize = "3.5em";
        }
    }
}

function deleteInput() {
    if (currentText.textContent.length) {
        currentText.textContent = currentText.textContent.slice(0, -1);
        if (currentText.textContent == "-") {
            currentText.textContent += "0";
        } else if (!currentText.textContent.length) {
            currentText.textContent = "0";
        }
    }

    setFontSize();
}


function handleOperator() {
    if (operation) {
        handleEquals();
    }
    firstNum = currentText.textContent;
    operation = this.textContent;
    resetScreen = true;
}

function removeActiveButton() {
    let active = document.querySelector(".active"); // shoud only be one active
    if (active) active.classList.remove("active");
}

function clearCalc() {
    currentText.textContent = "0";
    firstNum = undefined;
    operation = undefined;
    secondNum = undefined;
    
    let active = document.querySelector(".active");
    if (active) active.classList.remove("active");
}

function handleEquals() {
    if (operation) {
        secondNum = currentText.textContent;
        result = operate(firstNum, operation, secondNum);
        currentText.textContent = result; // TODO: Round to screen
        setFontSize();

        removeActiveButton();
        operation = undefined;
    }
}

