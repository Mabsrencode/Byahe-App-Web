import express from "express";
import {
  getDriversInformation,
  updateDriverVerification,
} from "../controllers/drivers.controller.js";

const router = express.Router();

router.get("/unverified", getDriversInformation);
router.patch("/verify/:id", updateDriverVerification);

export default router;
