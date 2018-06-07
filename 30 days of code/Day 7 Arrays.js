/* https://www.hackerrank.com/challenges/30-arrays */

// Task 
// Given an array, A, of N integers, print 's elements in reverse order as a single line of space-separated numbers.


function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = "";
    
    for (var i = n - 1; i > -1; i--)
        {
            result = result + arr[i] + " ";
        }
    console.log(result);

}
