const axios = require('axios')

const getFromWS = ()=> axios.get('https://jsonplaceholder.typicode.com/users')

module.exports = {getFromWS}