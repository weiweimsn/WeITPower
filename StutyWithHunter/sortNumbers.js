var numbers = [3, 2, 0, 9, 11];

for (var i = 0; i < numbers.length; i++) {
    for (var j = i + 1; j < numbers.length; j++) {
        // swap numbers
        if (numbers[i] > numbers[j]) {
            var temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;
        }
    }
}
console.log("sorted array is: " + numbers);