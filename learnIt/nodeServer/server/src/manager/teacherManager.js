const Test = require('../models/Test');

exports.addTest = async (TestData) => Test.create(TestData)

exports.getAll = async () => Test.find().populate('creator').lean();


exports.getOne = (TestId) => Test.findById(TestId).populate('creator').populate('questions');


exports.delete = (TestId) => Test.findByIdAndDelete(TestId);

exports.edit = (TestId, TestData) => Test.findByIdAndUpdate(TestId, TestData, { new: true });

exports.getByOwner = (userId) => Test.find({creator: userId})





