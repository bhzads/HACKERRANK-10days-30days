/* https://www.hackerrank.com/challenges/30-loops */


/*Task 
Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.
*/

function main() {
    var N = parseInt(readLine());
    
    for (var x = 1; x < 11; x++)
        {
            var result = N*x;
            console.log(N.toString() + " x " + x + " = " + result.toString());
        }

}
