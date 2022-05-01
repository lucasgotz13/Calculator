class Display {
    constructor(displayCurrentValue, displayPreviousValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.operator = undefined
        this.previousValue = "";
        this.currentValue = "";
        this.symbols = {
            "sum": "+",
            "substract": "-",
            "multiply": "*",
            "divide": "/"
        }
    }

    addNumber(num) {
        if (num  === "." && this.currentValue.includes(".")) return
        this.currentValue = this.currentValue.toString() + num.toString();
        this.displayValue()
    }

    displayValue() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.symbols[this.operator] || ""}`;
    }

    calculate() {
        this.currentValue  = parseFloat(this.currentValue);
        this.previousValue = parseFloat(this.previousValue);

        if (isNaN(currentValue) || isNaN(previousValue)) return;
        this.currentValue = this.calculator[this.operator](previousValue,currentValue)
    }

    compute(type) {
        this.operator !== 'equal' && this.calculate();
        this.operator = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = "";
        this.displayValue(); 
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.displayValue();
    }

    clear() {
        this.currentValue = ""
        this.previousValue = ""
        this.operator = undefined 
        this.displayValue()
    }
 
}