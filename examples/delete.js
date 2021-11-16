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

// a delete request on a delete route ()
app.delete("/delete", function(req, res){
  console.log("delete")

  // setting header
  res.type("application/json")

  // setting status
  res.status(200)

  // send answer
  res.send({msg: "delete can be used here, but with a route parameter"});

})


app.delete("/delete/:deleteparam", function(req, res){
  console.log("delete")

  // setting header
  res.type("application/json")

  // setting status
  res.status(200)

  // send answer
  res.send({msg: "here is where the resource '"+req.params.deleteparam+"' should have been deleted."});

})

// start the server!
app.listen(5000, function(){
  console.log("Server started")
})