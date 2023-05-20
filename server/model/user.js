import mongoose from "mongoose";


const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    }

})
//here user is like table wher the property of userschema applied to user table here we say collection
const user= mongoose.model('user',userSchema);


export default user;