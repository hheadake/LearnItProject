const Answer = require('../models/Answers');
const Test = require('../models/Test');

exports.getAll = async () => Answer.find().lean();
exports.getOne = (testId) => Test.findById(testId).lean();
// exports.createAnswer = async (answerData) => {
//     const answer = new Answer(answerData);
//     return await answer.save();
// };