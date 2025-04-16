const user_model = require('../models/user_model')


const get_user_data =(email)=> user_model.findOne({email : email})

const get_user_data_by_id =(id)=> user_model.findOne({_id : id})

const create_user=(user)=> user_model.create(user)

const update_user = (user) => user_model.findByIdAndUpdate(user._id, user, { new: true });




module.exports = {get_user_data,create_user,update_user,get_user_data_by_id}
