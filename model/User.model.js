import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name : String,
        email: String,
        password: String,
        role: {
            type : String,
            enum : ["User", "Admin"], //enum restricts role to be either user or admin, NO OTHER CHOICE
            default : "User"
        },
        sVerified: {
            type : Boolean, 
            default: false
        },
        verifiedToken: {
            type: String
        },
        verified:{ 
            type: Date
        },
    
    }, 
    {
        timestamps: true
    }
);

mongoose.model("User", userSchema);

export default user