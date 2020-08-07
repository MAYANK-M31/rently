const express = require("express");

const app =express();

app.get("/",function(req,res){
const customer=[
    {id:1,name:"mayank"},
    {id:2,name:"rahul"},
    {id:3,name:"dev"}
]

    res.json(customer)
})

app.listen(5000, function(req,res){
    console.log("server is started on port 5000")
});