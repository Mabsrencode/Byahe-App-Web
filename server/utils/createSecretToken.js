import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: 60 * 60 * 1000,
  });
};
export default createSecretToken;
