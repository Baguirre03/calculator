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

console.log(subtract(10,02))
console.log(multiply(100.120,4))
console.log(divide(10.12,2))

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

