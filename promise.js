// promise is an object in javascript

function myPromisefunction(){

    return new Promise(Function(resolve,reject)) {
        if(condition ) {
            resolve("Promise resolved");
        }
        else{
            reject("Promise rejected");

        }
    }


}

myPromisefunction("john").then(function(val){(
    console.log(val);


)}