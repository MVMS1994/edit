var app     = require('./output/Main/index.js');
var express = require('express');
var server  = express();
var port    = 8081;

server.use("/", function(req, res) {
  res.send("UP");
});

server.listen(port, function() {
  console.log("server started at " + port)
})

app.main();
