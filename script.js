//Wish me luck LOL

//outputs
const output = document.querySelector('#outputs')
const buttons = document.querySelectorAll('button')
const clear = document.querySelector('#clear')
const back = document.querySelector('#back')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')
const number = document.querySelectorAll('.number')
const functions = document.querySelectorAll('.function')

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
let valueTwo = ''
let operatorCalc = ""
var valueHolder

function setFirstValue(variable) {
    valueOne += variable
    output.textContent = valueOne
}

function setSecondValue(variable) {
    valueTwo += variable
    output.textContent = valueTwo
}

function setOperator(variableOp) {
    operatorCalc = variableOp.id
    output.textContent = variableOp.textContent
}

function stringHasNumber(string) {
    return /[0-9]/.test(string)
}

function finishedAnswer() {
    valueHolder = operate(operatorCalc, valueOne, valueTwo);
    output.textContent = valueHolder
}


function clearAll() {
    output.textContent = "0"
    operatorCalc = 0
    valueOne = 0
    valueTwo = 0
}

function getFirstValue() {
    number.forEach((button) => {
        button.addEventListener('click', () => {
            if (operatorCalc === "add" || 
            operatorCalc === "subtract" || 
            operatorCalc === "multiply" || 
            operatorCalc === "divide") {
                getSecondValue();
            } else if (!isNaN(button.textContent)){
                setFirstValue(button.textContent)
            }
        })
    })
}

functions.forEach((button) => {
    button.addEventListener('click', () => {
        setOperator(button)
    })
})

function getSecondValue() {
    number.forEach((button) => {
        button.addEventListener('click', () => {
            setSecondValue(button.textContent);
        })
    })
}

equals.addEventListener('click', () => {
    console.log(operate(operatorCalc, valueOne, valueTwo))
    console.log(valueOne)
    console.log(operatorCalc)
    console.log(valueTwo)
})



clear.addEventListener('click', () => {
    clearAll();
})

//Run code
getFirstValue();
//run equals sign








