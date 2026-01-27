function first(x) {
  console.log("First method calling");
  setTimeout(function () {
    console.log(1);
    x();
  }, 1000);
}

function third() {
  console.log(3);
}

first(function () {
  //anonymous function
  console.log(2);
});
third();

//function FunctionName(){

//}
