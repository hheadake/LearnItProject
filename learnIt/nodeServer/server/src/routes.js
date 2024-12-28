const router = require('express').Router();


const userController = require('./controllers/userController');
const teacherController = require('./controllers/teacherController');
const studentController = require('./controllers/studentController');

router.use('/users', userController);
router.use('/teacher', teacherController);
router.use('/tests', studentController);

module.exports = router;