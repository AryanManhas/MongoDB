const express = require("express")

const app = express();

const userModel = require("./usermodel");

app.get("/" , (req , res)=> {
    res.send("Hey!")
})

app.get("/create" , async (req , res)=> { // async to be put to nearest parent function
    let createduser = await userModel.create( //as it is async js so we'll use await
        {
            name : "aryan",
            username : "aryan",
            email : "aryanmanhas767@gmail.com"
        }
    )

    res.send(createduser)
})

app.get("/update" , async (req , res)=> { // async to be put to nearest parent function
    // userModel.findondUpdate( findone , update , {new : true}) the ways of writing
    let updateduser = await userModel.findOneAndUpdate( {username: 'aryan' }, {username: 'aryan manhas'} , {new : true})
    res.send(updateduser);
})

app.get("/read" , async (req , res)=> { // async to be put to nearest parent function
    // let users = await userModel.find({username:"aryan"}) for individual read always returns an array and gives empty if one user is not present and it we use .findOne the it will give null findOne gives us object findOne always find the first user
    let users = await userModel.find()
    res.send(users);
})

app.get("/delete" , async (req , res)=> { // async to be put to nearest parent function
    // let users = await userModel.find({username:"aryan"}) for individual read always returns an array and gives empty if one user is not present and it we use .findOne the it will give null findOne gives us object findOne always find the first user
    let deleteduser = await userModel.findOneAndDelete()
    res.send(deleteduser);
})


app.listen(3000);