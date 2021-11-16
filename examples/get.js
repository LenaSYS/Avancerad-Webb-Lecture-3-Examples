/*
  To start this express module must be installed.
  Since its in the dependencies in the package.json
  you can just type "npm i" from the root directory of this project

  To start a server with this conficuration (when you have node installed)
  you type: node <filename> 
  (ex in a consolewindow when you are in the examples dir, type: node get.js)
*/
const express = require("express")
const app = express();

//Getting the root route
app.get("/", function(req, res){
  console.log("Get root route")

  const retunJson = 
  {
    topic: "Hello!",
    msg: "root does not contain any info here, head over to /users"
  }

  // sending statuscode 200 with a json header and json data
  res.status(200).json(retunJson)
})

//Getting the users route
app.get("/users", function(req, res){
  console.log("Get all users")

  // setting header
  res.type("application/json")

  // setting status
  res.status(200)

  // send answer
  res.send([{ user: "user a", likes: 1 },{ user: "user b", likes: 3 }, { user: "user c", likes: 3 },{ user: "user d", likes: 7 }]);

})

// start the server!
app.listen(5000, function(){
  console.log("Server started")
})