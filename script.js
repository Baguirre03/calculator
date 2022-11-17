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
            if (valueTwo.includes(".") && button.textContent === ".") {
                console.log("You cant do that lol")
                return;
            } else if (operatorCalc === "add" || 
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
        } else if (valueOne === "") {
            return;
        }
        else if ((operatorCalc === "add" || 
            operatorCalc === "subtract" || 
            operatorCalc === "multiply" || 
            operatorCalc === "divide") &&
            (button.textContent === "+" || 
            button.textContent === "-" || 
            button.textContent === "x" || 
            button.textContent === "÷") &&
            (valueTwo != "")) {
                valueOne = operate(operatorCalc, valueOne, valueTwo);
                updateTop(`${valueOne} ${button.textContent}`);
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
    } else if (String(valueOne) === placeholder.textContent) {
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

//rounding
function round(value) {
    if (output.textContent = value && !Number.isInteger(value)) {
        value = value.toFixed(2)
        output.textContent = value
    } else {
        output.textContent = value
        return;
    }
}

//Positive and Negative switches

positiveNeg.addEventListener('click', () => {
    checkPositiveNegative();
})

function checkPositiveNegative() {
    if (parseInt(output.textContent) == parseInt(valueOne) && Math.sign(valueOne) === 1) {
        valueOne = (valueOne * 0) - valueOne
        if (valueOne.length < 3){
            valueOne = valueOne.toFixed(2)
        }
        output.textContent = valueOne
        placeholder.textContent = valueOne
    } else if (parseInt(output.textContent) == parseInt(valueOne) && Math.sign(valueOne) === -1) {
        valueOne = Math.abs(valueOne)
        if (valueOne.length < 3){
            valueOne = valueOne.toFixed(2)
        }
        output.textContent = valueOne
        placeholder.textContent = valueOne
    } else if (parseInt(output.textContent) == parseInt(valueTwo) && Math.sign(valueTwo) === 1) {
        valueTwo = (valueTwo * 0) - valueTwo
        output.textContent = valueTwo
    } else if (parseInt(output.textContent) == parseInt(valueTwo) && Math.sign(valueTwo) === -1) {
        valueTwo = Math.abs(valueTwo)
        output.textContent = valueTwo
    } else {
        return;
    }
}

//Run code
getFirstValue();

//Run Code with Keys LOL sorry this is a complete mess here -- copied code form aboce

addEventListener('keydown', (e) => {
    if(e.key === "Backspace") {
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
    } else if (e.key === "+" ||
                e.key === "-" ||
                e.key === "/" ||
                e.key === "x") {
                        if (valueOne == "" && e.key === "-") {
                            setFirstValue(e.key)
                        } else if (valueOne === "") {
                            return;
                        } else if ((operatorCalc === "add" || 
                            operatorCalc === "subtract" || 
                            operatorCalc === "multiply" || 
                            operatorCalc === "divide") &&
                            (e.key === "+" || 
                            e.key === "-" || 
                            e.key === "*" || 
                            e.key === "/") &&
                            (valueTwo != "")) {
                                valueOne = operate(operatorCalc, valueOne, valueTwo);
                                output.textContent = "blah"
                                updateTop(`${valueOne} ${e.key}`);
                                setOperatorKeys(e.key)
                                valueTwo = ""
                        } else {
                            setOperatorKeys(e.key)
                            updateTop(`${valueOne} ${e.key}`);
                                return;
                        }
    } else if (e.key === "1" ||
                e.key === "2" ||
                e.key === "3" ||
                e.key === "4" ||
                e.key === "5" ||
                e.key === "6" ||
                e.key === "7" ||
                e.key === "8" ||
                e.key === "9" ||
                e.key === "0" || 
                e.key === ".")  {
                            if (valueTwo.includes(".") && e.key === ".") {
                                console.log("You cant do that loll")
                                return;
                            } else if (operatorCalc === "add" || 
                                operatorCalc === "subtract" || 
                                operatorCalc === "multiply" || 
                                operatorCalc === "divide") { 
                                    setSecondValue(e.key);
                                    calculate();
                            }  else if (!isNaN(e.key) && String(valueOne) === placeholder.textContent && valueOne != 0) {
                                clearAll();
                                placeholder.textContent = ""
                                setFirstValue(e.key);
                            } else if (valueOne.includes(".") && e.key === "."){
                                console.log("You cant do that lol")
                                return;
                            } else if (!isNaN(e.key) || e.key === "."){
                                setFirstValue(e.key)
                            }
    } else if (e.key === "Enter") {
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
    }
})

//setOperator for keys
function setOperatorKeys(holder) {
    if (holder === "/") {
        setOperator(divide) 
    } else if (holder === "x") {
        setOperator(multiply)
    } else if (holder === "+") {
        setOperator(add) 
    } else if (holder === "-") {
        setOperator(subtract)
    }
}

const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')