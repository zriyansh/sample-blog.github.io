var express = require("express")
const path = require("path");
var app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
	 res.sendFile(path.join(__dirname + '/index.html'))
})
app.get("/new", function(req, res){
	 res.sendFile(path.join(__dirname + '/new.html'))
})
app.get("/delete", function(req, res){
	 res.sendFile(path.join(__dirname + '/delete.html'))
})
app.get("/register", function(req, res){
	 res.sendFile(path.join(__dirname + '/register.html'))
})
app.get("/login", function(req, res){
	 res.sendFile(path.join(__dirname + '/login.html'))
})




app.listen(port, () => console.log(`sample-blog listening on port ${port}!`));
