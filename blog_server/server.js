var express = require('express');
var cors = require("cors");
var app = express();

var corsOptions={
    option:["http://localhost:4200"]
}

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    console.log("server listeneing");
});

require("./articles.js")(app);

app.listen(3000);