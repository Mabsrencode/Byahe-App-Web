import express from "express";
import { getDriversInformation } from "../controllers/drivers.controller.js";

const router = express.Router();

router.get("/unverified", getDriversInformation);

export default router;
