                                            // TWILIO SMS CODE

const express = require("express")

const app =express();

app.get('/',function(req,res){
    res.send(recipient)
})

const accountSid ="AC56d5aa35e49e0cda708f85dc9197baae";
const authToken ="2fd3231c200ebade0370e7323411134a";
const client = require('twilio')(accountSid,authToken);

app.get('/sendtext',function(req,res){

    const {recipient,ownername,locality,price,name} = req.query

    client.messages.create({
        to:'+91'+ recipient,
        from:"+13237160751",
        body:'Rently Thanks ' +name+ '. For Sharing Your Details  House Owner:' +ownername+ ',Phone no : 8006705084. Locality : ' +locality+ ',Rent : ' +price+'/month . FOR FURTHER ASSISTANCE VISIT http://www.Rently.in'
    }).then((message)=>console.log(message.sid));
})

app.listen(5000,function(req,res){
    console.log("you are on port 5000")
})


