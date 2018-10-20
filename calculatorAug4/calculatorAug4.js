window.onload = function () {
    var zeroButton = document.getElementById("zeroButton");
    var oneButton = document.getElementById("oneButton");
    var twoButton = document.getElementById("twoButton");
    var threeButton = document.getElementById("threeButton");
    var fourButton = document.getElementById("fourButton");
    var fiveButton = document.getElementById("fiveButton");
    var sixButton = document.getElementById("sixButton");
    var sevenButton = document.getElementById("sevenButton");
    var eightButton = document.getElementById("eightButton");
    var nineButton = document.getElementById("nineButton");

    //operators
    var plusOperator = document.getElementById("plusOperator");
    var minusOperator = document.getElementById("minusOperator");
    var timesOperator = document.getElementById("timesOperator");
    var divideOperator = document.getElementById("divideOperator");

    var equalOperator = document.getElementById("equalOperator");

    addEventListenerToButtons(zeroButton);
    addEventListenerToButtons(oneButton);
    addEventListenerToButtons(twoButton);
    addEventListenerToButtons(threeButton);
    addEventListenerToButtons(fourButton);
    addEventListenerToButtons(fiveButton);
    addEventListenerToButtons(sixButton);
    addEventListenerToButtons(sevenButton);
    addEventListenerToButtons(eightButton);
    addEventListenerToButtons(nineButton);

    //operatos
    addEventListenerToButtons(plusOperator);
    addEventListenerToButtons(minusOperator);
    addEventListenerToButtons(timesOperator);
    addEventListenerToButtons(divideOperator);

    equalOperator.addEventListener("click", function () {
        var expressionTextBox = document.getElementById("expressionTextBox");
        expressionTextBox.value = eval(expressionTextBox.value);
    });

    function addEventListenerToButtons(button) {
        button.addEventListener("click", function () {
            var expressionTextBox = document.getElementById("expressionTextBox");
            expressionTextBox.value += button.value;
        });
    }
};