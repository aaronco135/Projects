import axios from 'axios'

const getAll = ()=> axios.get("http://localhost:3000/users")

const getById = async (id)=>{

    const users = await getAll()
    const user = users.find((user)=>user.id === id)
    return user
}
export default  {getAll,getById}