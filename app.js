const express = require("express")

const app = express();

const userModel = require("./usermodel")

app.get("/" , (req , res)=> {
    res.send("Hey!")
})

app.get("/create" , async (req , res)=> { // async to be put to nearest parent function
    let createduser = await userModel.create( //as it is async js so we'll use await
        {
            name : "aryan",
            username : "aryan",
            email : "aryanmanhas6767@gmail.com"
        }
    )

    res.send(createduser)
})
app.get("/update" , async (req , res)=> { // async to be put to nearest parent function
    userModel.findOneUpdate()
})


app.listen(3000);