/*
  To start this express module must be installed.
  Since its in the dependencies in the package.json
  you can just type "npm i" from the root directory of this project

  to start a server with this conficuration (when you have node installed)
  you type: node <filename> 
  (ex in a consolewindow when you are in the examples dir, type: node get.js)
*/
const express = require("express")
const app = express();

// a simple GET with one route param
app.get("/users/:userid", function(req,res){
  //logic goes here
  console.log("the :userid parameter contains "+req.params.userid)

  // sending statuscode 200 with a json header and json data
  res.status(200).json({msg: `the requested user was ${req.params.userid}`})
})

// You can have more than one route params
app.get("/users/:userid/moreinfo/:type", function(req,res){
  res.status(200).json({msg: `the requested type for ${req.params.userid} was ${req.params.type}`})
})

// yiou can use the route params with more than just GET, like POST (or DELETE, PUT, and so on)
app.post("/users/:userid", express.json(), function(req,res){
  console.log("user: "+req.params.userid);
  console.log(req.body)
  res.status(200).json({msg: `A POST request user was ${req.params.userid}`})
})

// start the server!
app.listen(5000, function(){
  console.log("Server started")
})