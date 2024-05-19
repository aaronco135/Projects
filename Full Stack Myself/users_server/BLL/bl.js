const model = require('../model')

const getAllUsers =()=>  model.find({})

const getUser =(id)=>  model.findOne({id : id})

const AddUser =(obj)=>  model.create(obj)

const UpdateUser = (id,obj) => model.findByIdAndUpdate(id,obj)


const DeleteUser = (id)=> model.delete({id:id})

module.exports = {getAllUsers,getUser,AddUser,DeleteUser,UpdateUser}