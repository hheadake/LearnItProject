const  teacherManager  = require('../manager/teacherManager');
const { getErrorMessage } = require('../utils/errorHandler');
const {auth} = require('../middleware/authMiddleware');

const router = require('express').Router();



router.get('/', async (req, res) => {

    try {
        const { allTest } = await teacherManager.getAll();
        return res.status(201).json(allTest);

    } catch (err) {

        throw new Error("Something went wrong while getting test information");


    }

});

router.post('/create', async (req, res) => {
    const testData = {
        ...req.body,
        // creator: req.user?._id,
    };
    

    try {
        
        if (!testData.title || !testData.questions || testData.questions.length === 0) {
            return res.status(400).json({ message: "Title and questions are required" });
        }

    
        const newTest = await teacherManager.addTest(testData);
       return res.status(201).json(newTest);

    } catch (err) {
        
        return res.status(500).json({ message: "Something went wrong while creating new Test", error: err.message });
    }




});



router.get('/:testId', async (req, res) => {
    try {
        const testId = req.params.testId;
        const test = await teacherManager.getOne(testId).lean();

        
        if (!test) {
            return res.status(404).json({ message: "Test not found" });
        }

        return res.status(200).json(test); 
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while getting test", error: error.message });
    }
});


router.put('/:testId', auth , async (req, res) => {
    try {
        const testId = req.params.testId; 
        const updateData = req.body; 

        
        const updatedTest = await teacherManager.edit(testId, updateData, {
            new: true, 
            runValidators: true, 
        });

        if (!updatedTest) {
            return res.status(404).json({ message: "Test not found" });
        }

        return res.status(200).json(updatedTest); 

    } catch (error) {
        console.error("Error updating test:", error);
        return res.status(500).json({ message: "Something went wrong while updating test", error: error.message });
    }
});


router.delete('/:testId', auth, async (req, res) => {
    try {
        const testId = req.params.testId;
        const userId = req.user._id;

        
        const test = await teacherManager.getOne(testId);
        
        if (!test) {
            return res.status(404).json({ message: 'Test not found' });
        }

        

        
        await teacherManager.delete(testId);

        res.status(200).json({ message: 'Test deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});


module.exports = router;