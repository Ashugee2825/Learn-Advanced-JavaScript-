const events = require("events");

const chatRoom = new events.EventEmitter();

function userJoined(username) {
  //event handler function
  console.log("User " + username + " has joined the meeting");
}

chatRoom.on("userJoined", userJoined);

function login(username) {
  chatRoom.emit("userJoined", username);
}

login("Ginni");

//chatRoom.on("userJoined, function(){}")
