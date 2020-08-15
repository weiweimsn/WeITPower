var sodokuNumbers = [];

// pre-load work
window.onload = function () {
    loadSodukoSectionNumber();
    // getNumbersByRow(0);
    // getNumbersByRow(1);
    // getNumbersByRow(2);
    // getNumbersByRow(3);
    // getNumbersByRow(4);
    // getNumbersByRow(5);
    // getNumbersByRow(6);
    // getNumbersByRow(7);
    // getNumbersByRow(8);

    // getNumbersByColumn(0);
    // getNumbersByColumn(1);
    // getNumbersByColumn(2);
    // getNumbersByColumn(3);
    // getNumbersByColumn(4);
    // getNumbersByColumn(5);
    // getNumbersByColumn(6);
    // getNumbersByColumn(7);
    // getNumbersByColumn(8);
}

function loadSodukoSectionNumber() {
    var sectionNames = ["section1", "section2", "section3", "section4", "section5", "section6", "section7", "section8", "section9"];
    for (var i = 0; i < sectionNames.length; i++) {
        var section = document.getElementById(sectionNames[i]);
        var sectionNumbers = [];
        for (var j = 0; j < section.children.length; j++) {
            if (section.children[j].tagName === "INPUT") {
                var number = section.children[j].value;
                sectionNumbers.push(Number.parseInt(number));
            }
        }
        sodokuNumbers.push(sectionNumbers);
    }
    console.log(sodokuNumbers);
}

function checkUniqueNumbers1(array) {
    var dictionary = {};
    for (var i = 0; i < array.length; i++) {
        if (dictionary[array[i]] == null) {
            dictionary[array[i]] = 1;
        }
        else {
            return false;
        }
    }
    return true;
}

function getNumbersByRow(rowIndex) {
    var numbers = [];
    var rowIncrement = Math.floor(rowIndex / 3) * 3;
    for (var i = 0 + rowIncrement; i < 3 + rowIncrement; i++) {
        var array = sodokuNumbers[i]; // sodokuNumbers[i] is the section at index i
        for (var j = 0 + (rowIndex * 3) % 9; j < 3 + (rowIndex * 3) % 9; j++) {
            numbers.push(array[j]);
        }
    }
    return numbers;
}

function getNumbersByColumn(columnIndex) {
    var numbers = [];
    var sectionStartIndexes = [0, 3, 6];
    var sectionIncrement = Math.floor(columnIndex / 3);
    for (var i = 0; i < 3; i++) {
        var array = sodokuNumbers[sectionStartIndexes[i] + sectionIncrement];
        for (var j = 0; j < 3; j++) {
            numbers.push(array[sectionStartIndexes[j] + columnIndex % 3]);
        }
    }
    console.log(numbers);
    return numbers;
}
