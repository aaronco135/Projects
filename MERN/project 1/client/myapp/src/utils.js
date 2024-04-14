import axios from "axios"

const url = "http://localhost:8000/students"

const getAll =  async ()=>{

    const {data} = await axios.get(url)
    return data
}

const getById = async (id)=>{

    const {data} = await axios.get(url+'/'+id)
    return  data
}

const add =async  (obj)=>{
    await axios.post(url,obj)
    return "added !"
}

const update = async (id,obj)=>{

    await axios.put(url+'/'+id,obj)
    return "updated !"
}

const del = async (id)=>{

    await axios.delete(url+'/'+id)
    return "deleted !"
}

export default  {
    getAll , getById , add , update , del
}