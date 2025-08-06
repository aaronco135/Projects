const model = require('../models/cv_model')



const get_user_cv =(email)=> model.findOne({email: email})

 const add_user_cv=(member)=> model.create(member)
 
 const update_user_cv = (email, newCVList) =>
    model.updateOne({ email }, { $set: { cvs: newCVList } });
  


module.exports = {get_user_cv,update_user_cv,add_user_cv}

