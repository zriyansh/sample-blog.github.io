var express = require("express")

var app = express();

app.set("view engine", "ejs")


app.get("/", function(req, res){
	res.render("home")
})


app.listen(3111, function(){
	console.log("Starting port 3111 ");
});
