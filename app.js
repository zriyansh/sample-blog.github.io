var express = require("express")
const path = require("path");
var app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs")


app.get("/", function(req, res){
	res.render("home")
})


app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));