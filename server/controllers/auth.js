import bcrypt from "bcrypt";
import User from "../models/user.js";
import createSecretToken from "../utils/createSecretToken.js";

// Register a new user
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      username,
      email,
      password,
    });
    const token = createSecretToken(user._id.toString());
    res.cookie("biyahe-user-tk", token, {
      withCredentials: true,
      httpOnly: false,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });
    res.status(201).json({ message: "Registration successful", user });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = createSecretToken(user._id);
    res.cookie("biyahe-user-tk", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Login successful",
      user: { username: user.username, role: user.role, email: user.email },
    });
  } catch (error) {
    next(error);
  }
};

//logout
const logout = (req, res) => {
  try {
    res.clearCookie("biyahe-user-tk", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(400);
  }
};

export { register, login, logout };
