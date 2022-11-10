//Wish me luck LOL
//basic functions

const add = function(aAdd, bAdd) {
    return aAdd + bAdd
}

const subtract = function(a, b) {
    return a - b
}

const multiply = function(a, b) {
    return a * b
}

const divide = function(a, b) {
    return a / b
}

const operate = function(operator, a, b) {
    if (operator === "add") {
        return add(a,b)
    } else if (operator === "subtract") {
        return subtract(a,b)
    } else if (operator === "multiply") {
        return multiply(a,b)
    } else if (operator === "divide") {
        return divide(a,b)
    } else {
        return "error" 
    }
}

//Outouts
const output = document.querySelector('.output')
const buttons = document.querySelectorAll('button')
const functions = document.querySelectorAll('.subtract, .add, .divide, .multiply')

displayValue = ""


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        a += button.textContent
        console.log(displayValue)
    })
})



