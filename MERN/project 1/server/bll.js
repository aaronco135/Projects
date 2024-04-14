const students = require('./model')

const getAllStudents =()=> students.find({})

const getStudentById =(id)=> students.findById(id)

const addStudent = async (obj) => {
    try {
      const newStudent = new students(obj);
      const savedStudent = await newStudent.save();
      return savedStudent;
    } catch (error) {
      throw error;
    }
  };

const updateStudent = (id,obj)=> students.findByIdAndUpdate(id,obj)

const deleteStudent = (id)=> students.findByIdAndDelete(id)

module.exports = {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent}