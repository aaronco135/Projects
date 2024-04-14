import axios from 'axios'

const get_all= async (url)=>{
    const {data} = await axios.get(url)
    return data
}
const add_one= async (url,obj)=>{
    const resp = await axios.post(url,obj)
    return resp.status
}
const update_one= async (url,id,obj)=>{
    const resp = await axios.put(url,id,obj)
    return resp.status
}
const delete_one= async (url,id)=>{
    const resp = await axios.delete(url,id)
    return resp.status
}

export default  {get_all,add_one,update_one,delete_one}