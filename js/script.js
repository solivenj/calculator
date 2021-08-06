const buttons = document.getElementById("buttons");
const currentText = document.getElementById("current-text");
const storedText = document.getElementById("stored-text");
const numbers = buttons.querySelectorAll(".numbers");
const acButton = buttons.querySelector("#ac");
const cButton = buttons.querySelector("#c");
const negativeButton = buttons.querySelector("#negative");
const operators = buttons.querySelectorAll(".operator");
const equals = document.getElementById("equals");

let operation = "";

const numbersList = [...numbers];
numbersList.push(negativeButton)

numbersList.forEach(number => number.addEventListener("click", enterInput));
operators.forEach(operator => operator.addEventListener("click", operate));
cButton.addEventListener("click", deleteInput);

acButton.onclick = () => currentText.textContent = "0";




const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => !num2 ? "ERR" : num1 / num2;

function operate(operator, num1, num2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            returnresult = multiply(num1, num2);
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = "ERR";
            break;
    }

    return result;
}

function enterInput() {
    let value = this.textContent;
    let fontSize = "";
    
    if (currentText.textContent == "0") {
        if (value == "+/-") {
            if (currentText.textContent[0] == "-") {
                currentText.textContent = currentText.textContent.slice(1);
            } else {
                currentText.textContent = "-" + currentText.textContent;
            }
        } else {
            currentText.textContent = value;
        }
    } else if (currentText.textContent.length < 9) {
        if (value == "+/-") {
            if (currentText.textContent[0] == "-") {
                currentText.textContent = currentText.textContent.slice(1);
            } else {
                currentText.textContent = "-" + currentText.textContent;
            }
        } else {
            if (currentText.textContent.length < 9) {
                currentText.textContent += value;
            }
        }

        console.log(currentText.textContent.length);

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
    } else {
        if (value == "+/-") {
            if (currentText.textContent[0] == "-") {
                currentText.textContent = currentText.textContent.slice(1);
            } else {
                currentText.textContent = "-" + currentText.textContent;
            }
        }
        
        console.log(currentText.textContent.length);

        if (currentText.textContent.length <= 6) {
            fontSize = "5em";
        } else if (currentText.textContent.length <= 7) {
            fontSize = "4.25em";
        } else if (currentText.textContent.length <= 8) {
            fontSize = "4em";
        } else if (currentText.textContent.length <= 9) {
            fontSize = "3.75em";
        } else {
            fontSize = "3.5em";
        }

        currentText.style.fontSize = fontSize;
    }
}

function deleteInput() {
    if (currentText.textContent.length) {
        currentText.textContent = currentText.textContent.slice(0, -1);
        if (!currentText.textContent.length) {
            currentText.textContent = "0";
        }
    }

    console.log(currentText.textContent.length);

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









