//promise is an object in javascript

function myPromiseFunction(name) {
  return new Promise(function (resolve, reject) {
    //to initialize the promise
    if (name == "John") {
      resolve("Promise resolved");
    } else {
      reject("promise rejected");
    }
  });
}

myPromiseFunction("John").then(
  function (val) {
    console.log("Resolve block called");
    console.log(val);
  },
  function (val) {
    console.log("Rejection block called");
    console.log(val);
  }
);
