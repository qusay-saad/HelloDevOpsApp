const express = require("express");

const app = express();

app.use(express.static(__dirname));



app.get("/api/status", (req,res)=>{

res.json({
status:"running",
message:"My DevOps app works!"
});

});



app.get("/health",(req,res)=>{

res.json({

status:"OK",
uptime:process.uptime(),
timestamp:Date.now()

});

});



app.get("/version",(req,res)=>{

res.json({
version:"1.0.0",
name:"Hello DevOps App"
});

});







const PORT = process.env.PORT || 3000;


if(process.env.NODE_ENV !== "test"){

app.listen(PORT, ()=>{
console.log("Server running");
});

}

module.exports = app;




