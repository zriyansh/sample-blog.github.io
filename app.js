var express = require("express")
const path = require("path");
var app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs")


app.get("/", function(req, res){
	res.render("home")
})


app.listen(process.env.PORT, function(){
	console.log("Starting port 3111 ");
});
