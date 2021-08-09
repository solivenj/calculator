const buttons = document.getElementById("buttons");
const currentText = document.getElementById("current-text");
const storedText = document.getElementById("stored-text");
const numbers = buttons.querySelectorAll(".numbers");
const acButton = buttons.querySelector("#ac");
const cButton = buttons.querySelector("#c");
const negativeButton = buttons.querySelector("#negative");
const operators = buttons.querySelectorAll(".operator");
const decimal = buttons.querySelector("#decimal");
const equals = document.getElementById("equals");

let firstNum = undefined;
let operation = undefined;
let secondNum = undefined;
let resetScreen = undefined;

let numbersList = [...numbers];
numbersList.pop(); // remove decimal button
numbersList.push(negativeButton)

numbersList.forEach(number => number.addEventListener("click", enterInput));
operators.forEach(operator => operator.addEventListener("click", handleOperator));
equals.addEventListener('click', handleEquals);
cButton.addEventListener('click', deleteInput);
decimal.addEventListener('click', handleDecimal);

acButton.addEventListener('click', clearCalc);


const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => !num2 ? "ERR" : num1 / num2;

function operate(num1, operator, num2) {
    let result = 0;
    num1 = Number.parseFloat(num1);
    // num1 = Number(num1);
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

    setFontSize();
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
    } else {
        fontSize = "3.5em";
    }

    currentText.style.fontSize = fontSize;
}

function enterInput() {
    let value = this.textContent;
    if (currentText.textContent == "0" || resetScreen) {
        reset();
    }
    

    if (currentText.textContent.length < 9) {
        if (value == "+/-") {
            handleNegative();
            return
        }
        currentText.textContent += value;
        setFontSize()
    } else {
        if (value == "+/-") handleNegative();
    }
}
    
function handleDecimal() {
    if (resetScreen) reset()
    if (currentText.textContent == '')
        currentText.textContent = '0'
    if (currentText.textContent.includes('.')) return // don't allow multiple decimals
    currentText.textContent += '.'
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

function reset() {
    currentText.textContent = "";
    resetScreen = false;
}


function handleOperator() {
    if (currentText.textContent != firstNum || operation) {
        handleEquals();
    }
    firstNum = currentText.textContent;
    operation = this.textContent;
    removeActiveButton();
    this.classList.add("active");
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
    if (!operation || resetScreen || currentText.textContent == "ovf") return;

    secondNum = currentText.textContent;
    result = operate(firstNum, operation, secondNum);
    result = roundToScreen(result);
    currentText.textContent = result.includes('e') ? result : result / 1;
    currentText.textContent = roundToScreen(result); 
    setFontSize();

    removeActiveButton();
    operation = undefined;

}

function roundToScreen(result) {
    let res = "";
    if (result.toString().length > 9) {
        let num = result.toExponential()
        let numList = num.toString().split('e');
        let base = Number(numList[0]).toFixed(4);
        let exp = numList[1];

        if (-9 < exp && exp < 9) {
            // if number can fit in screen then format it correctly
            num = Number.parseFloat(num)
            digits = num.toString().split('.');
            res = num.toFixed(8 - digits[0].length);
        } else {
            // fit exponential notation version of number in string
            res = `${base.toString()}e${numList[1]}`
        }

        return res.length > 9 ? 'ovf' : res;
    } else {
        return Number.parseFloat(result);
    }
}

