var express = require("express")
const path = require("path");
var app = express();
const port = process.env.PORT || 3000;



app.get("/", function(req, res){
	 res.sendFile(path.join(__dirname + '/home.html'))
})


app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));