const model = require('../models/user_model')



const get_Member =(email)=> model.findOne({email : email})

const add_Member=(member)=> model.create(member)



const update_Member = async (email, updatedFields) => {
    return await model.updateOne(
      { email }, 
      { $set: updatedFields }
    );
  };

  const decrementToken = async (email) => {
    const result = await model.updateOne(
      { email: email, token: { $gt: 0 } },
      { $inc: { token: -1 } }
    );}
  

const delete_Member =(email)=> model.deleteOne({email:email})

module.exports = {get_Member,add_Member,update_Member,delete_Member,decrementToken}
