import User from "../models/user.js";
import jwt from "jsonwebtoken";

const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({ status: true, user: user.username, role: user.role });
      else return res.json({ status: false });
    }
  });
};
export { userVerification };
