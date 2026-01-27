function first() {
  //simulate code delay
  console.log("First method calling");
  setTimeout(function () {
    console.log(1);
    second();
  }, 1000); //1 sec= 1000 millisec
}

function second() {
  console.log(2);
}

first();
