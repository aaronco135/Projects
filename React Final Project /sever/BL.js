const jwt = require("jsonwebtoken")
//const { GetAll } = require("../firebase/utils")


const users = [
  { username: "Avi", password: "1234" },
  { username: "Moshe", password: "1357" }
]

const login =  (user) => {
  console.log(user);
  //  const users = await  GetAll("users")
  const foundedUser = users.find((usr) => usr.username == user.username)
  console.log(foundedUser);
  if (foundedUser === undefined) {
    console.log("und");
    return false;
  }
  if (foundedUser.password == user.password) {

    return true
  }
  console.log("wrong !!")
  return false
}

const createToken = (user) => {

  const token = jwt.sign(user, "secret")

  return token
}

module.exports = { login, createToken }