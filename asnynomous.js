var fs = require("fs");
fs.readFile("input.txt", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString());
  }
});
console.log("Program ended");

