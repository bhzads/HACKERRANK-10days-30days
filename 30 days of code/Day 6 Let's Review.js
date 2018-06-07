/* https://www.hackerrank.com/challenges/30-review-loop */

// Task 
// Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).
// Note:  is considered to be an even index.

function processData(input) {
    //Enter your code here
    message = input.split("\n");
    
    var n = parseInt(message[0]);
    
    for (var x = 0; x < n; x++)
        {
            var m = message[x + 1];
            var l = m.length;
            var arr = m.split('');
            var ra = "";
            var rb = "";
            
            for (var y = 0; y < l; y++)
                {
                    if (y%2 == 0)
                        ra = ra + arr[y];
                    else
                        rb = rb + arr[y];
                }
            console.log(ra + " " + rb);
            
        }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
