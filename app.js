var express = require("express")
const path = require("path");
var app = express();
const port = process.env.PORT || 3000;

app.get("/", function(req, res){
	 res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`sample-blog listening on port ${port}!`));