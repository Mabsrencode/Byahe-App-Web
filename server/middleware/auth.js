import User from "../models/user.js";
import jwt from "jsonwebtoken";

const userVerification = async (req, res) => {
  const token = req.cookies["biyahe-user-tk"];
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          user: { username: user.username, role: user.role, email: user.email },
        });
      else return res.json({ status: false });
    }
  });
};
export { userVerification };
