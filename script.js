//Wish me luck LOL

//outputs
const output = document.querySelector('#outputs')
const placeholder = document.querySelector('#placeholder')
const clear = document.querySelector('#clear')
const back = document.querySelector('#back')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')
const plusMinus = document.querySelector('#plusMinus')
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
let topSection = ""
topHolder = ""

function setFirstValue(variable) {
    valueOne += variable
    output.textContent = valueOne
}

function setSecondValue(variable) {
    valueTwo += variable
    output.textContent = valueTwo
}

function setOperator(variable) {
    operatorCalc = variable.id
    output.textContent = variable.textContent
}

function clearAll() {
    output.textContent = "0"
    operatorCalc = ""
    valueOne = ""
    valueTwo = ""
    placeholder.textContent = "0"
}

function updateTop(variable) {
    placeholder.textContent = variable
}



function getFirstValue() {
    number.forEach((button) => {
        button.addEventListener('click', () => {
            if (operatorCalc === "add" || 
            operatorCalc === "subtract" || 
            operatorCalc === "multiply" || 
            operatorCalc === "divide") { 
                setSecondValue(button.textContent);
            } else if (!isNaN(button.textContent)){
                setFirstValue(button.textContent)
                return;
            }
        })
    })
}

functions.forEach((button) => {
    button.addEventListener('click', () => {
        setOperator(button)
        updateTop(`${valueOne} ${button.textContent}`);
        return;
    })
})

equals.addEventListener('click', () => {
    valueHolder = operate(operatorCalc, valueOne, valueTwo)
    output.textContent = (operate(operatorCalc, valueOne, valueTwo))
    valueOne = valueHolder
    updateTop(`${valueOne}`);
    operatorCalc = ""
    valueTwo = ""
})

//backspace
back.addEventListener('click', () => {
    console.log(operatorCalc)
    if (operatorCalc === "add" || 
    operatorCalc === "subtract" || 
    operatorCalc === "multiply" || 
    operatorCalc === "divide") {
        let placeholder = valueTwo.slice(0, valueTwo.length - 1);
        valueTwo = placeholder
        output.textContent = valueTwo
        checkEmptyDiv();
    } else {
        let placeholder = valueOne.slice(0, valueOne.length - 1);
        valueOne = placeholder
        output.textContent = valueOne
        checkEmptyDiv();
    }
})

//clear button
clear.addEventListener('click', () => {
    clearAll();
})

//if backspace all the way output shows empty
function checkEmptyDiv() {
    if (output.textContent === "") {
        output.textContent = "0"
    }}
    
//Run code
getFirstValue();








