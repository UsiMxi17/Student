import { getUserPoints, addUserPoints, redeemUserPoints } from "../models/loyaltyModel.js";

// Get user's loyalty points
const getUserPointsCon = async (req, res) => {
    try {
        const userId = req.params.userId;
        const points = await getUserPoints(userId);
        res.json(points);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add loyalty points after a purchase
const addUserPointsCon = async (req, res) => {
    try {
        const { userId, amountSpent } = req.body;
        await addUserPoints(userId, amountSpent);
        res.json({ message: "Points added successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Redeem points for a discount
const redeemUserPointsCon = async (req, res) => {
    try {
        const { userId, pointsToRedeem } = req.body;
        const result = await redeemUserPoints(userId, pointsToRedeem);
        
        if (result.success) {
            res.json({ message: result.message });
        } else {
            res.status(400).json({ error: result.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getUserPointsCon, addUserPointsCon, redeemUserPointsCon };
