const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require('../models/User');
const constants = require("../config/constants");



const register = async ({ username, email, password }) => {
	try {

		const hashedPassword = await bcrypt.hash(password, constants.SALT_ROUNDS);

		const user = new User({ username, email, password: hashedPassword });

		await user.save();

		return user;
	} catch(error) {
		throw new Error("Something went wrong while trying to sign up!");
	}
};


