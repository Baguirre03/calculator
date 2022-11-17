//Wish me luck LOL

//outputs
const output = document.querySelector('#outputs')
const placeholder = document.querySelector('#placeholder')
const clear = document.querySelector('#clear')
const back = document.querySelector('#back')
const equals = document.querySelector('#equals')
const period = document.querySelector('#period')
const positiveNeg = document.querySelector('#plusMinus')
const number = document.querySelectorAll('.number')
const functions = document.querySelectorAll('.function')

//basic functions 
const addition = function(a, b) {
    return +a + +b
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

//setting value functions 
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

//update placeholder(top-part)
function updateTop(variable) {
    placeholder.textContent = variable
}

//Code body
function getFirstValue() {
    number.forEach((button) => {
        button.addEventListener('click', () => {
            if (operatorCalc === "add" || 
            operatorCalc === "subtract" || 
            operatorCalc === "multiply" || 
            operatorCalc === "divide") { 
                setSecondValue(button.textContent);
                calculate();
            }  else if (!isNaN(button.textContent) && String(valueOne) === placeholder.textContent && valueOne != 0) {
                clearAll();
                placeholder.textContent = ""
                setFirstValue(button.textContent);
            } else if (valueOne.includes(".") && button.textContent === "."){
                console.log("You cant do that lol")
                return;
            } else if (!isNaN(button.textContent) || button.textContent === "."){
                setFirstValue(button.textContent)
            }
        })
    })
}

//-+÷x
functions.forEach((button) => {
    button.addEventListener('click', () => {
        if (valueOne == "" && button.textContent === "-") {
            setFirstValue(button.textContent)
        } else if ((operatorCalc === "add" || 
            operatorCalc === "subtract" || 
            operatorCalc === "multiply" || 
            operatorCalc === "divide") &&
            (button.textContent === "+" || 
            button.textContent === "-" || 
            button.textContent === "x" || 
            button.textContent === "÷") &&
            (valueTwo != "")) {
                valueOne = operate(operatorCalc, valueOne, valueTwo);
                output.textContent = valueOne
                updateTop(`${valueOne}`);
                setOperator(button)
                valueTwo = ""
            } else {
                setOperator(button)
                updateTop(`${valueOne} ${button.textContent}`);
                return;
        }
    })
})

//equals bttn
function calculate(){
    equals.addEventListener('click', () => {
        if (valueTwo === "") {
            return;
        } else {
        valueOne = operate(operatorCalc, valueOne, valueTwo)
        output.textContent = valueOne
        round(valueOne);
        updateTop(`${valueOne}`);
        operatorCalc = ""
        valueTwo = ""
        }
    })
}

//backspace button
back.addEventListener('click', () => {
    if (operatorCalc === "add" || 
    operatorCalc === "subtract" || 
    operatorCalc === "multiply" || 
    operatorCalc === "divide") {
        valueTwo = valueTwo.slice(0, valueTwo.length - 1);
        output.textContent = valueTwo
        checkEmptyDiv();
    } else if (String(valueOne) === placeholder.textContent) { //(restart if click = and enter dif number) 
        valueOne = String(valueOne).slice(0, String(valueOne).length - 1);
        output.textContent = valueOne
        placeholder.textContent = valueOne
        checkEmptyDiv();
    } else {
        valueOne = valueOne.slice(0, valueOne.length - 1);
        output.textContent = valueOne
        checkEmptyDiv();
    }
})

//clear all button
clear.addEventListener('click', () => {
    clearAll();
})

//if backspace all the way output returns empty rather than nothing
function checkEmptyDiv() {
    if (output.textContent === "") {
        output.textContent = "0"
    }}

function round(value) {
    if (output.textContent = value && !Number.isInteger(value)) {
        value = value.toFixed(2)
        output.textContent = value
    } else {
        output.textContent = value
        return;
    }
}

//Run code
getFirstValue();


//Positive and Negative switches

positiveNeg.addEventListener('click', () => {
    if (output.textContent = valueOne) {
        checkPositiveNegative(valueOne);
    } else if (output.textContent = valueTwo) {
        checkPositiveNegative(valueTwo);
    }
})

function checkPositiveNegative(value) {
    if (Math.sign(value) == 1) {
        parseInt(value)
        value = (value * 0) - value
        output.textContent = value
        console.log(value)
        console.log("post to neg")
    } else {
        value = Math.abs(value)
        output.textContent = value
        console.log(value)
        console.log("neg to pos")
    }
}




