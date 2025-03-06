import { pool } from "../config/db.js";

// Fetch user points
const getUserPoints = async (userId) => {
    let [data] = await pool.query("SELECT points FROM loyalty_points WHERE user_id = ?", [userId]);
    return data.length ? data[0] : { points: 0 }; // Return 0 if no entry exists
};

// Add points after a purchase
const addUserPoints = async (userId, amountSpent) => {
    const pointsEarned = Math.floor(amountSpent / 10); // 1 point per $10 spent
    await pool.query("UPDATE loyalty_points SET points = points + ? WHERE user_id = ?", [pointsEarned, userId]);
};

// Redeem points for a discount
const redeemUserPoints = async (userId, pointsToRedeem) => {
    const [user] = await pool.query("SELECT points FROM loyalty_points WHERE user_id = ?", [userId]);

    if (user.length && user[0].points >= pointsToRedeem) {
        await pool.query("UPDATE loyalty_points SET points = points - ? WHERE user_id = ?", [pointsToRedeem, userId]);
        return { success: true, message: "Points redeemed successfully!" };
    }
    return { success: false, message: "Not enough points." };
};

export { getUserPoints, addUserPoints, redeemUserPoints };
