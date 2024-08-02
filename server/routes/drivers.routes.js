import express from "express";
import {
  getVerifiedDriversInformation,
  getUnverifiedDriversInformation,
  updateDriverVerification,
} from "../controllers/drivers.controller.js";

const router = express.Router();

router.get("/verified", getVerifiedDriversInformation);
router.get("/unverified", getUnverifiedDriversInformation);
router.patch("/verify/:id", updateDriverVerification);

export default router;
