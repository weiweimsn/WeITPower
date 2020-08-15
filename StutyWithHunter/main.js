var mathExpression;
var keyCodes = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 109, 106, 111, 110];
window.onload = function () {

    mathExpression = document.getElementById("expression");
}

window.onkeydown = function (event) {
    if (keyCodes.indexOf(event.keyCode) > -1) {
        mathExpression.innerText += event.key;
    }
    else if (event.keyCode === 13) {
        equal();
    }
    else if (event.keyCode === 67) {
        clearCal();
    }
}

function getSquareRoot() {
    mathExpression.innerText = Math.sqrt(parseInt(mathExpression.innerText));
}

function equal() {
    mathExpression.innerText = eval(mathExpression.innerText);
}

function addNumber1() {
    mathExpression.innerText += "1";
}

function addNumber2() {
    mathExpression.innerText += "2";
}

function addNumber3() {
    mathExpression.innerText += "3";
}

function addNumber4() {
    mathExpression.innerText += "4";
}

function addNumber5() {
    mathExpression.innerText += "5";
}

function addNumber6() {
    mathExpression.innerText += "6";
}

function addDot() {
    mathExpression.innerText += ".";
}

function add() {
    mathExpression.innerText += "+";
}

function minus() {
    mathExpression.innerText += "-";
}

function multiple() {
    mathExpression.innerText += "*";
}

function divide() {
    mathExpression.innerText += "/";
}

function clearCal() {
    mathExpression.innerText = "";
}

