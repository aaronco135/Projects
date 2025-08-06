
import axios from "axios";

export const verifyToken = async (token) => {
  if (!token) return false;

  try {
    const res = await axios.post("http://localhost:8000/api/auth/verify", { token : token });
    if (res.data.auth) {
          return true
        } else {
          return false
        }
      } catch (err) {
        console.error(err);
      }
};
