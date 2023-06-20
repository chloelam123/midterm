const mongoose = require('mongoose');

//define a Student Mongoose model schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String,
  createdDated: {
    type: Date,
    default: Date.now,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
});

//Create Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
