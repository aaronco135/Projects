const usersDAL = require("./DAL")

const getAll = async ()=>{

    const{data} = await usersDAL.getFromWS()
    console.log(data)
    return data
}

const getById = async (id)=>{

    const users  = await getAll()
    const user = users.find(usr => usr.id == id)
    return user
}

module.exports = {getAll,getById}