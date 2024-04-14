const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

const  getAll =  () => axios.get(url)

module.exports = {
    getAll
}
