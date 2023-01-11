var fs = require("fs");
/*
var data = fs.readFileSync('input.txt');

console.log(data.toString());
*/
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");
//Michelle Liu, Pd. 78, Level 8CW