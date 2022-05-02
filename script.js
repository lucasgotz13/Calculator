const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const currentDisplayNumber = document.querySelector("#current-value")
const previousDisplayNumber = document.querySelector("#previous-value");
const equalButton = document.querySelector(".equal");
let currentNumber = "";
let previousNumber = "";
let operator = "";

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    })
})

equalButton.addEventListener('click', () => {
    if (previousNumber !== "" && currentNumber !== "") {
        calculate();
    }
})

function handleNumber(number) { 
    if (previousNumber !== "" && currentNumber !== "" && operator === "") {
        previousNumber = "";
        currentDisplayNumber.textContent = currentNumber;
    } 
    if (number === "." && currentNumber.includes(".")) return;
    currentNumber += number
    currentDisplayNumber.textContent = currentNumber

}

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (operator !== "") {
            calculate()
        }
        handleOperator(e.target.textContent)
    })
})

function handleOperator(op) { 
    operator = op;  
    if (previousNumber === "") {
        previousNumber = currentNumber;
        hasOperator(op)
    } else if (currentNumber === "") {
        hasOperator(op)
    } else {
        calculate();
        operator = op;
        currentDisplayNumber.textContent = ""
        previousDisplayNumber.textContent = `${previousNumber} ${operator}`;
    }
}

function hasOperator(text) {
    operator = text;
    previousDisplayNumber.textContent = `${previousNumber} ${operator}`
    currentDisplayNumber.textContent = "";
    currentNumber = "";
}

function calculate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    
    if (operator === "+") {
        previousNumber += currentNumber;
        console.log(previousNumber)
    } else if (operator === "-") {
        previousNumber -= currentNumber;
    } else if (operator === "*") {
        previousNumber *= currentNumber;
    } else if (operator === "/") {
        if (currentNumber <= 0) {
            previousNumber = "Math error";
            displayResults(); 
            return;
        }
        previousNumber /= currentNumber;
    }
    previousNumber = previousNumber.toString();
    previousNumber = roundNumber(previousNumber);
    displayResults() 
}

const clear = document.querySelector("#clear");
clear.addEventListener('click', clearCalculator);

function clearCalculator() {
    previousNumber = "";
    currentNumber = "";
    operator = "";
    currentDisplayNumber.textContent = "";
    previousDisplayNumber.textContent = "";
}

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

function displayResults() {
    currentDisplayNumber.textContent = previousNumber;
    previousDisplayNumber.textContent = "";
    operator = "";
    currentNumber = "";
}

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener('click', deleteNumber)

function deleteNumber() {
    if (currentNumber !== "") {
        currentNumber = currentNumber.slice(0,-1);
        currentDisplayNumber.textContent = currentNumber;
    }
}