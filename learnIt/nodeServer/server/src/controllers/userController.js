const router = require('express').Router();
const { getErrorMessage } = require('../utils/errorHandler.js');
const userManager = require('../manager/userManager.js');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userManager.login(email, password);
        res.cookie('token', token)

        return res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (err) {
        return res.status(401).json({
            error: err.message,
        });
    }
});


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await userManager.register({ email, password});


        return res.status(201).json({
            message: "Registration successful",
            user: userData
        });

    } catch (err) {

        return res.status(400).json({
            error: getErrorMessage(err)
        });
    }
});

router.post('/logout', (req, res) => {
    // Изчистваме 'token' бисквитката
    res.clearCookie('token', {
        httpOnly: true, // Същите настройки като при създаването на cookie
        secure: false, // Задай 'true' ако използваш HTTPS в production
        sameSite: 'lax' // или 'strict' за по-голяма сигурност
    });

    return res.status(200).json({
        message: "Logout successful"
    });
});

module.exports = router;