const events = require("events");

//EventEmitter() is a class
const chatRoom = new events.EventEmitter(); //object of the class

function userJoined(username) {
  //event handler function
  console.log("User " + username + " has joined the meeting");
}

chatRoom.on("myEvent", userJoined);

function login(username) {
  chatRoom.emit("myEvent", username); // event trigger:myEvent , username:Ginni
}

login("Ginni");

//chatRoom.on("userJoined, function(){}")
