const model = require('./model')

const GetAll = ()=> model.find({})

const DataModel = (id) => model.findById(id)

const PostModel = (obj) => model.insertOne(obj)

const PutModel = (id,obj) => model.findByIdAndUpdate(id,obj)

const DeleteModel = (id) => model.findByIdAndDelete(id)
module.exports = {
    DataModel ,
    PostModel,
    PutModel,
    DeleteModel,
    GetAll
}

