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

// 
app.post("/posthere", express.json(), function(req,res){
  console.log(req.body)
  res.status(200).json(req.body)
})

// post to example posthere/Johan/ needs to have userid as a parameter in a json body
app.post("/posthere/:parameter", express.json(), function(req,res){
  console.log("Post userid: "+req.body.userid);
  console.log("parameter: "+req.params.parameter);
  
  res.status(200).json({msg: `A POST request user was ${req.params.userid}`})
})


// start the server!
app.listen(5000, function(){
  console.log("Server started")
})