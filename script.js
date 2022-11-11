//Wish me luck LOL

//outputs
const output = document.querySelector('#outputs')
const buttons = document.querySelectorAll('button')
const clear = document.querySelector('#clear')
const back = document.querySelector('#back')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')

//basic functions 
const addition = function(a, b) {
    return parseInt(a) + parseInt(b)
}

const subtraction = function(a, b) {
    return a - b
}

const multiplies = function(a, b) {
    return a * b
}

const divides = function(a, b) {
    return a / b
}

const operate = function(operator, a, b) {
    if (operator === "add") {
        return addition(a, b)
    } else if (operator === "subtract") {
        return subtraction(a, b)
    } else if (operator === "multiply") {
        return multiplies(a, b)
    } else if (operator === "divide") {
        return divides(a, b)
    } else {
        return "error" 
    }
}

let valueOne = ""
let valueTwo = ""
let operatorCalc = ""
let a = ""

function setFirstValue(variable) {
    valueOne += variable
    output.textContent = valueOne
}

function setSecondValue(variable) {
    valueTwo += variable
    output.textContent = valueTwo
}

function getOperator(variableOp) {
    operatorCalc = variableOp.id
    output.textContent = variableOp.textContent
}

function stringHasNumber(string) {
    return /[0-9]/.test(string)
}

function clearALL() {
    valueOne = ""
    valueTwo = ""
    operatorCalc = ""
}

function getFirstValue() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (operatorCalc === "add" || 
                operatorCalc === "subtract" || 
                operatorCalc === "multiply" || 
                operatorCalc === "divide") {
                getSecondValue();
            }
             else if(!isNaN(button.textContent)) {
                    setFirstValue(button.textContent)
            }
            else if (isNaN(button)
                && button.textContent != "AC"
                && button.textContent != "C"
                && button.textContent != "="
                && button.textContent != "+/-") {
                    getOperator(button)
                    getSecondValue();
            }
        })
    })
}

function getSecondValue() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(!isNaN(button.textContent)) {
                setSecondValue(button.textContent)
            } else if (button.id === "equals") {
                    console.log(valueOne);
                    console.log(operatorCalc);
                    console.log(valueTwo);
                operate(operatorCalc, valueOne, valueTwo);
                output.textContent = operate(operatorCalc, valueOne, valueTwo)
            }
        })
    })  
}

clear.addEventListener('click', () => {
    getFirstValue(0);
    getSecondValue(0);
})

//Run code
getFirstValue();

//run equals sign -> Need to change
equals.addEventListener('click', () => {
    console.log(operate(operatorCalc, valueOne, valueTwo))
})





