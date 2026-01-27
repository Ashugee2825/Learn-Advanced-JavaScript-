// // const p = new Promise((resolve, reject) => {
// //     resolve("promise resolved value: ");

// // })

// // async function getData() {
// //     return p;
// // }

// // const dataPromise = getData();

// // dataPromise.then((res) => console.log(res));

// // function getData() {
// //     p.then((res) => console.log(res));

// //      console.log("Ashutosh JavaScrpt");
     

    

// // }
 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("P2 Sucess"), 1000);

// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p3 Sucess"), 2000);

// });

// Promise.all([p1,p2,p3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

   // 2nd Method 
// const p = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value!! ");
// });


// async function handlePromise() {
//     console.log(val); 
// } 

// handlePromise();

// function getData() {
//     p.then((res) => {
//         co
//     })
// }



// console.log(this);

// function x() {
//     console.log(this);
// }

// x();



// let str = "Apna College"


// let size = 0;
// for (let i of str) {
//     console.log("i= : ", i);
//     size++;
// }

// console.log("String size: ", size );


// let Student ={
//     name: "Ashutosh Kumar ",
//     age: "25",
//     cgpa: "8.5",
//     isPass: true
// };


// for (ley key in Student) {
//     console.log("Key=", key, "VAlue=", student[Key]);

// }



// // print all even Number

// for(let num = 0; num <= 100; num++) {
//     console.log("num = " , num);

//     if(num%2 === 0) {
//         console.log("Number", num);
//     }
// }


// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// console.log(userNum);

// while(userNum !== gameNum) {
//    userNum = prompt("you eneterd the numbers");
// }

// console.log("Congratuations the game is Completed ");



// //string is sequence of Character 

// let str = "Ashutosh";
// let  str3 = "name of person";

// str.length(str3);

// console.log(str[4]);

// //templates literals
// let obj = {
//     item : "pen",
//     price: 1000
// };

// let sentence = 'This is a template literals';
// console.log(typeof specialString);

// console.log("the cost of", ${Obj.item}, "is", ${Obj.price}, "rupess");

// // String Interpolation

// let specialString = "This is "

// console.log("Ashutosh \n Kumar");
// console.log("Ashutosh \t Kumar ");

// let str22 = "Ashutosh\tKumar"
// console.log(str.length);

// // String Methods // String is immutable

// str22.toUpperCase()
// str22.toLowerCase()  // 
// str22.trim()  // remove white Spaces

// str.replace(searchvalue ,newValue);

// let str11 = "Ashu";
// let str21 = "Don"
// console.log("");
// str21.replace(D ,M);
// str22.replace(s ,i);


// str21[0] = "S";
// console.log(str21);


// user = prompt("Enter your Name");


// let mark = {
//     stu1: 98,
//     str2: 87
// }


// // Coolletions of itema Array

// let Heros= ["ashu", "mona", "neha"];
// let marks = [89,98,74,85,95,54];


// for (ley idx = 0; idx < Heros.length; idx++) {
//     console.log(Heros[idx]);
// }

// let arr(callBack);


// let number = [ 2,4,6,8];
// num.forEach((number) => {
//     console.log(number * number);

// });


// // 2nd methods 
// let calsquare = (number) => {
//         console.log(number * number);
// }
// number.forEach(calsquare);

// arr.map(indexedDB,vaue, map)

// let arr1 = [1,2,3,4,5,6,7,8,9];
//  arr1.filter


// const  output = arr.reduce(perv , curr) => {
//     return 
// }


// let marksall = [97,99,96,97,96,44];

// let newArr = marksall.filter((val) => {
//     return val > 90;
// })

// console.log(newArr);
// // 2nd questions Anser 

// let n1 = prompt ("Enter a Number: ");
// let arr22 = [];
// for (let i= 1; i <= n1; i ++) {
//     arr22[i - 1] = i;
// }

// console.log(arr22);


// let sum = arr22.reduce((res, curr) => {
//     return res + curr;
// });

// console.log("Sum:" , sum );

// let fact = arr22.reduce((res, curr) => {
//         return res + curr;
// });
// console.log("factorial:" , fact );


// let Data = "Secret information";

// class User {
//     const(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("Data = ", Data)
//     }
// }

// class Admin extends User {
//     constructor(name, email);
//     editData() {
//         Data = "Some new Value",
//     }
// }


// let a = 4;
// let b =5;

// console.log("a: ", a);

// console.log("a: ", b);
// console.log("a: ", a);
// console.log("a: ", a); //error 
// console.log("a: ", a);
// console.log("a: ", a);



//  try {  
//     console.log("a+b= " , a + c);
//   } catch(err) {
//     console.log(err);
//   }

// //  asyn await >> promise  chains >> callBack hell


// for(let i = 0; i < 5; i++) {

// }

// function getData(dataId)
// {
//     setTimeout(() => {
//         confirm.log(dataId)
//     }, 2000);
// }
// getData(1);

// getData(1, () => {  // callback Hell
//     getData(2)

// });


// function getData(dataId)
// {
//     setTimeout(() => {
//         console.log(dataId)
//     }, 2000);
// }
// getData(1);

// getData(1, () => {  // callback Hell
//     getData(2)

// });

// const getPromise() => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");

//         reject("error");
//         });
// }

// let Promise = getPromise();
// Promise.then((result) => {
//     console.log("Promise fulfilled");
// });

// Promise.catch((error) => {
//     console.log("Rejected");
// })



// const =

// Ajax
const ashu = requires("./secondfile");
console.log("Hello World!!!!", ashu);

const os = requires(os.freemen());
console.log("OS Info: ", os);

