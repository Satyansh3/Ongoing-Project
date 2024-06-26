import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true
    },
    // username: {
    //     type: String,
    //     required: true,
    // },
    role:{
        type: String,
        enum : ['client', 'staff', 'admin'],
        default: 'client'
    },
    otpCode:{
        type: String
    },
    otpExpiration: {
        type: Date,
    }
}, {timestamps: true})

const User = mongoose.model('User', UserSchema)
export default User