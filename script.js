const resultScreen = document.getElementById("resultScreen")
let numbers = ""
let n1 = ""
let n2 = ""
let operator = "operator"
let dot = false

function addNumber(number) {
    numbers += number
    if (operator === "operator") {
        n1 += number
    } else {
        n2 += number
    }
    show()
}

function addDot() {
    if (!dot) {
        if (operator === "operator") {
            if (n1.length === 0) {
                n1 += "0"
                numbers += "0"
            }
            n1 += "."
        } else {
            if (n2.length === 0) {
                n2 += "0"
                numbers += "0"
            }
            n2 += "."
        }
        dot = true
        numbers += "."
    }
    show()
}

function setOperator(op) {
    if (operator === "operator" && numbers.length > 0) {
        operator = op
        dot = false

        switch (operator) {
            case "+":
                numbers += "+"
                break
            case "-":
                numbers += "-"
                break
            case "*":
                numbers += "×"
                break
            case "/":
                numbers += "÷"
                break
            case "%":
                numbers += "%"
                break
            default:
                break
        }
        show()
    }
}

function del() {
    if (operator === "operator") {
        if (n1.endsWith(".")) {
            dot = false
        }
        n1 = n1.slice(0, -1)
    } else if (operator !== "operator" && n2.length === 0) {
        operator = "operator"
    } else {
        if (n2.endsWith(".")) {
            dot = false
        }
        n2 = n2.slice(0, -1)
    }
    numbers = numbers.slice(0, -1)
    show()
}

function clearAll() {
    numbers = ""
    n1 = ""
    n2 = ""
    operator = "operator"
    dot = false
    show()
}

function show() {
    resultScreen.innerText = numbers
}

function calc() {
    if (n2.length === 0) {return}

    let num1 = Number(n1)
    let num2 = Number(n2)
    let result = 0

    switch(operator) {
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        case "%":
            result = (num1 * num2) / 100
            break
        default:
            resultScreen.innerText = "ERROR"
    }

    numbers = result.toString()
    n1 = result.toString()
    n2 = ""
    operator = "operator"
    show()
}