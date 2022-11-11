//Wish me luck LOL

//outputs
const output = document.querySelector('.output')
const buttons = document.querySelectorAll('button')
const functions = document.querySelectorAll('.subtract, .add, .divide, .multiply')
const clear = document.querySelector('.clear')
const back = document.querySelector('.back')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')

//basic functions 
const addition = function(aAdd, bAdd) {
    return aAdd + bAdd
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
        return addition(a,b)
    } else if (operator === "subtract") {
        return subtraction(a,b)
    } else if (operator === "multiply") {
        return multiplies(a,b)
    } else if (operator === "divide") {
        return divides(a,b)
    } else {
        return "error" 
    }
}

let valueOne = ""
let valueTwo = ""
let operatorCalc = ""
let a = ""

function firstValue(variable) {
    valueOne += variable
    output.textContent = valueOne
}

function secondValue(variable) {
    valueTwo += variable
    output.textContent = valueTwo
}

function operatorGet(variableOp) {
    operatorCalc = variableOp
    output.textContent = variableOp
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!isNaN(valueOne)) {
            secondValue(button.textContent)
        } else if(!isNaN(button.textContent)) {
            firstValue(button.textContent)
        } else if (isNaN(button)
                    && button.textContent != "clear"
                    && button.textContent != "back"
                    && button.textContent != "="
                    && button.textContent != ".") {
            operatorGet(button.id)
            return
        }
        console.log(valueOne)
        console.log(valueTwo)
    })
})

//run equals sign -> Need to change
equals.addEventListener('click', () => {
    console.log(operate(operatorCalc, valueOne, valueTwo))
})





