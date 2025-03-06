import express from "express";
import { getUserPointsCon, addUserPointsCon, redeemUserPointsCon } from "../controller/loyaltyContoller.js";

const router = express.Router();

router.get("/points/:userId", getUserPointsCon);
router.post("/add-points", addUserPointsCon);
router.post("/redeem-points", redeemUserPointsCon);

export default router;
