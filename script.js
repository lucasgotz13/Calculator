const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const currentDisplayNumber = document.querySelector("#current-value")
const previousDisplayNumber = document.querySelector("#previous-value");
let currentNumber = "";
let previousNumber = "";
let operator = "";

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleNumber(e.target.textContent)
    })
})

function handleNumber(number) { 
    currentNumber += number
    currentDisplayNumber.textContent = currentNumber

}

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
    })
})

function handleOperator(op) {
    operator = op;
    if (op === "=") {
        calculate()
    }
    previousNumber = currentNumber;
    previousDisplayNumber.textContent = `${previousNumber} ${operator}`;
    currentNumber = "";
    currentDisplayNumber.textContent = ""
}

function calculate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);

    if (operator === "+") {
        previousNumber += currentNumber;
    } else if (operator === "-") {
        previousNumber -= currentNumber;
    } else if (operator === "*") {
        previousNumber *= currentNumber;
    } else if (operator === "/") {
        if (currentNumber <= 0) {
            previousNumber = "MATH ERROR";
        }
        previousNumber /= currentNumber;
    }

    previousNumber = previousNumber.toString();
    previousDisplayNumber.textContent = "";
    currentDisplayNumber.textContent = previousNumber;
    operator = "";
}




