/* https://www.hackerrank.com/challenges/30-dictionaries-and-maps */
//Code from commentor in discussions section

// Task 
// Given n names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure.

function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k< N; k++){
        var line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N+1; k < input.length; k++ ){
        var num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k]+'='+num)
        } else {
            console.log('Not found')
        }
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
