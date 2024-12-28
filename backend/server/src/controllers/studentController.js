const express = require('express');
const router = express.Router();
const studentManager = require('../manager/studentManager')



router.get('/', async (req, res) => {
    try {
        const tests = await studentManager.getAll();
        res.status(200).json(tests);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tests', error: error.message });
    }
});


router.get('/:testId', async (req, res) => {
    try {
        const testId = req.params.testId;
        const test = await studentManager.getOne(testId)

        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching test details', error: error.message });
    }
});


router.post('/:testId/submit', async (req, res) => {
    try {
        const testId = req.params.testId;
        const { answers } = req.body;  

        
        const test = await studentManager.getOne(testId)

        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }

        // Примерна логика за проверка на отговорите
        let score = 0;
        test.questions.forEach((question) => {
            if (answers[question._id] === question.correctOption) {
                score += 1;
            }
        });

        res.status(200).json({ message: 'Test submitted successfully', score, totalQuestions: test.questions.length });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting test', error: error.message });
    }
});

module.exports = router;