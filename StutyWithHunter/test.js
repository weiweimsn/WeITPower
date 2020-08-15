// "Hello"

function checkLetterCount(word) {
    var letterCount = {};
    for (var i = 0; i < word.length; i++) {
        if (letterCount[word[i]] == null) {
            letterCount[word[i]] = 1;
        }
        else {
            letterCount[word[i]]++;
        }
    }

    var property = "";
    var value = -1;
    var letterArray = Object.entries(letterCount);
    for (var i = 0; i < letterArray.length; i++) {
        if (letterArray[i][1] > value) {
            value = letterArray[i][1];
            property = letterArray[i][0];
        }
    }

    return property;
}

console.log("Most frequent letter is: " + checkLetterCount("helloooo"));