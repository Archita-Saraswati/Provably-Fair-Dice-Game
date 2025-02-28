const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let serverSeed = crypto.randomBytes(32).toString("hex"); // Secure random server seed
let hashedServerSeed = crypto.createHash("sha256").update(serverSeed).digest("hex"); // Hash for verification

console.log("🔒 Server Seed (Hidden):", serverSeed);
console.log("🔗 Hashed Server Seed (Public):", hashedServerSeed);

app.post("/roll-dice", (req, res) => {
    const { clientSeed, betAmount, balance } = req.body;

    if (!clientSeed || typeof betAmount !== "number" || typeof balance !== "number") {
        return res.status(400).json({ error: "Invalid request data" });
    }

    // Generate a fair roll using serverSeed + clientSeed
    const combinedSeed = serverSeed + clientSeed;
    const rollHash = crypto.createHash("sha256").update(combinedSeed).digest("hex");
    
    // Convert hash to a number between 1-6
    const roll = (parseInt(rollHash.substring(0, 8), 16) % 6) + 1;

    // Update balance based on roll (Win if roll > 3)
    const winMultiplier = roll > 3 ? 2 : 0; 
    const newBalance = balance + betAmount * winMultiplier - betAmount;

    res.json({ roll, hash: rollHash, balance: newBalance });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
