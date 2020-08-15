var numbers = [10, 3, 2, 4, 5, 9, 7, 8, 6, 1];

// numbers.sort();


var result = getMinimumNumber(numbers);



console.log("Mininum number is: " + result);


function getMinimumNumber(numbers) {
    var result = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        var temp = numbers[i];
        if (result > temp) {
            result = temp;
        }
    }
    return result;
}