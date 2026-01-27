let promise = new Promise(function (resolve, reject) {
  const x = "hello";
  const y = "hello world";
  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    //true
    console.log("successfull");
  })
  .catch(function () {
    //false
    console.log("some error has occured");
  })
  .finally(function () {
    console.log("have a nice day");
  });

  