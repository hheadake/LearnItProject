const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        //unique: true,  
        //match: [/\S+@\S+\.\S+/, 'Email is invalid']  
    },
    // username: {
    //     type: String,
    //     required: [true, 'Name is required'],
    //     minlength: [3, 'Name must be at least 3 characters long'],
    //     maxlength: [50, 'Name must be less than 50 characters long']
    // },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    // role:
    // {
    //     type: String,
    //     enum: ['teacher', 'student'],
    //     required: true
    // },

});


const User = mongoose.model('User', userSchema);

module.exports = User;