const axiosDAL = require('../DAL/usersDALaxios')
const jsonDAL = require('../DAL/usersDALjson')
const model = require('../model/model')

//
const DataAxiosById= async (id) => {

 
    const {data} = await axiosDAL.getAll()
    info = data.map(user => {
        if(user.id === id){
        return {
            name: data.name,
            email: data.email
        }
    }
    })
    return info
}

const DataAxios = () => {
    return axiosDAL.getAll()
        .then((response) => {
            return response.data; 
        })
};

const DataJson = async (id) => {

    const actionsFilter = await jsonDAL.getActions()
    
    const info = actionsFilter.map(act => {
        if(act.id===id){
        return {
            maxActions : actionsFilter.maxActions,
            actionAlowed : actionsFilter.actionAlowed
        }
    }
    })
    return info
}

const DataModel = (id) => model.findById(id)



module.exports={
    DataAxios,
    DataJson,
    DataModel,
    DataAxiosById
}