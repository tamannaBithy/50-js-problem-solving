// #11: Calculate the average of the numbers in an array of numbers
function averageArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    console.log(average);
}
averageArray([1, 2, 3]);
