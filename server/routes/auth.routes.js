import express from "express";
import { register, login } from "../controllers/auth.js";
import { userVerification } from "../middleware/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/", userVerification);
export default router;
