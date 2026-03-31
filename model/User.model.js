import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
    role: {
        type : String,
        enum : ["User", "Admin"],
        default : "User"
    }
    isVerified: {
        type : Boolean, 
        default: false
    }
})

mongoose.model("User", usderSchema);

export default user