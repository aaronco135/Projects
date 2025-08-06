const userModel = require("../models/user_model"); 
const { generateToken } = require("./jwt_utils");

const loginUser = async (email, password) => {

  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user.email);

  return  token // Tu peux filtrer ce que tu renvoies ici si besoin
};

module.exports = { loginUser };
