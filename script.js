const currentValue = document.getElementById("current-value");
const previousValue = document.getElementById("previous-value");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const display = new Display(previousValue, currentValue);

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML)
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.compute(button.value)
    })
})


