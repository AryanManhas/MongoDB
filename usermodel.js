const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/monngopractice`)

const userSchema = mongoose.Schema( // accepts a object schema is details of user
    {
        name : String,
        username : String,
        email : String
    }
)

module.exports = mongoose.model("users" , userSchema); //exports is not a method it is a property

