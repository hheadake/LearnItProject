const mongoose = require('mongoose');

const Answer = new mongoose.Schema({
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true }, // Връзка с въпроса
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Потребител, който е отговорил
    answer: { type: String, required: true }, // Отговор на потребителя
    isCorrect: { type: Boolean, default: false } // Дали отговорът е правилен
});

module.exports = mongoose.model('Answer', Answer);