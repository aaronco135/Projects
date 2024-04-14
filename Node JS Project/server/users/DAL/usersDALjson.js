const jf = require('jsonfile')
const file = './data/users.json'

const getActions = () => jf.readFile(file)

module.exports = {
    getActions
}