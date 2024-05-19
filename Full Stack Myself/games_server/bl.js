const model = require('./model')

const getGames = async ()=> {

    const data = await model.find({})
    return data
} 

const getGame =(id)=>  model.findOne({id : id})

const AddGame =(obj)=>  model.create(obj)

const updateGame = (id,obj) => model.findByIdAndUpdate(id,obj)

const DeleteGame = (id)=> model.deleteOne({id:id})

module.exports = {getGame,getGames,AddGame,updateGame,DeleteGame}