const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../../src/config/constants');
const {SALT_ROUNDS} = require('../../src/config/constants');

exports.login = async (email, password) => {

    //find user by username
    const user = await User.findOne({email})

    console.log(user)

    if(!user) {
        throw new Error('Invalid email!')
    }


    

    //check password

    const isValid = await bcrypt.compare(password, user.password)
    

    if(!isValid) {
        throw new Error('Invalid username or password')
    }

    const payload = {
        _id: user._id,
        email: user.email,

    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2 days' });
    // res.cookie('token', token, { httpOnly: true, secure: false }); // secure: true за HTTPS
    // res.status(200).json({ message: 'Logged in successfully' });

return token;



};

exports.register = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);
    userData.password = hashedPassword;

    if (user) {
        throw new Error('Email already exists!');
    }

 

    return User.create(userData);
}