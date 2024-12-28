const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//     questionText: { type: String, required: true },
//     options: [{ type: String, required: true }],
//     correctOption: { type: String, required: true }
// });

const testSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [
      {
        questionText: { type: String, required: true }, 
        options: { type: [String], required: true },    
        correctOption: { type: String, required: true } 
      }
    ]
  
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;