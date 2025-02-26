const express = require("express");
const crypto = require("crypto");
require("dotenv").config();

const router = express.Router();

router.post("/payfast", async (req, res) => {
try {
    const { amount, item_name, return_url, cancel_url } = req.body;

    const merchant_id = process.env.PAYFAST_MERCHANT_ID;
    const merchant_key = process.env.PAYFAST_MERCHANT_KEY;
    const passphrase = process.env.PAYFAST_PASSPHRASE;
    
    const data = {
    merchant_id,
    merchant_key,
    amount,
    item_name,
    return_url,
    cancel_url,
    };

    // Create query string
    const queryString = Object.keys(data)
    .map((key) => `${key}=${encodeURIComponent(data[key])}`)
    .join("&");

    // Generate secure signature
    const signature = crypto
    .createHash("md5")
    .update(queryString + "&passphrase=" + passphrase)
    .digest("hex");

    // Final PayFast URL
    const payfastUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}&signature=${signature}`;

    res.json({ success: true, payfastUrl });

} catch (error) {
    res.status(500).json({ success: false, message: "Payment error", error });
}
});

module.exports = router;
