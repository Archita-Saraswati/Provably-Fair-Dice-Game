"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [betAmount, setBetAmount] = useState(10);
  const [result, setResult] = useState(null);
  const [balance, setBalance] = useState(1000);
  const [rolling, setRolling] = useState(false);

  const rollDice = async () => {
    if (betAmount > balance) {
      alert("Not enough balance!");
      return;
    }

    setRolling(true);
    const clientSeed = Math.random().toString(36).substring(2, 15); // Generate random client seed

    try {
      const response = await axios.post("http://localhost:5000/roll-dice", {
        clientSeed,
        betAmount,
        balance,
      });

      setResult(response.data);
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error rolling dice:", error.response ? error.response.data : error.message);
    }
    
    setRolling(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-yellow-400 flex items-center gap-2">
        🎲 Provably Fair Dice Game
      </h1>
      <p className="text-lg mt-2">
        Balance: <span className="font-bold text-green-400">${balance}</span>
      </p>

      <div className="bg-gray-800 p-6 mt-6 rounded-xl shadow-lg w-96 text-center">
        <input
          type="number"
          value={betAmount}
          min="1"
          max={balance}
          onChange={(e) => setBetAmount(Number(e.target.value))}
          className="w-full p-2 bg-gray-700 text-white rounded-lg text-center"
          disabled={rolling}
        />

        <button
          className={`w-full mt-4 p-3 rounded-lg font-bold text-white ${
            rolling ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={rollDice}
          disabled={rolling}
        >
          {rolling ? "Rolling..." : "Roll Dice 🎲"}
        </button>

        {result && (
          <div className="mt-4">
            <p className="text-3xl font-bold text-yellow-400">{result.roll}</p>
            <p className="text-sm text-blue-300 break-all mt-2">Hash: {result.hash}</p>
          </div>
        )}
      </div>
    </div>
  );
}
