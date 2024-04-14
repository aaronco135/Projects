const express = require('express')
const studentsBL = require('./bll')

const router = express.Router()

router.get('/' , async (req,res)=>{
    try {
        const students = await studentsBL.getAllStudents()
        console.log(students);
        res.status(200).json(students)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

router.get('/:id' , async (req,res)=>{
    try {
        const {id} = req.params
        const student = await studentsBL.getStudentById(id)
        res.status(200).json(student)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

router.post('/' , async (req,res)=>{
    try {
        const obj = req.body
        const students = await studentsBL.addStudent(obj)
        res.status(200).json(students)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

router.put('/:id' , async (req,res)=>{
    try {
        const {id} = req.params
        const obj = req.body
        const students = await studentsBL.updateStudent(id,obj)
        res.status(200).json(students)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

router.delete('/:id' , async (req,res)=>{
    try {
        const {id} = req.params
        const students = await studentsBL.deleteStudent(id)
        res.status(200).json(students)
    } catch(e){
        res.status(500).json({ msg: e.message })
    }
})

module.exports = router