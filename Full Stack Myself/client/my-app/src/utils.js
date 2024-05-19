import axios from 'axios';

const getAll = async (url) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error("Error fetching games:", error);
        return [];
    }
}

const createAccount = async (obj) => {
    try {
        const result = await axios.post("http://localhost:3001/users", obj);
        return result;
    } catch (error) {
        console.error("Error creating account:", error);
        throw error;
    }
}
const updatePassword = async (email,obj) => {
    try {
        const users = await getAll("http://localhost:3001/users")
        const  user = users.find(elem=>elem.email === email)

        const url = `http://localhost:3001/users/${user._id}`
        return  await axios.put(url, obj);
       
    } catch (error) {
        console.error("Error update account:", error);
        throw error;
    }
}

export default { getAll, createAccount, updatePassword};
