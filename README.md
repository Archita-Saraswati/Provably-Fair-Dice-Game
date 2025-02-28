# 🎲 Provably Fair Dice Game

A full-stack web application that provides a provably fair dice-rolling experience. It ensures transparency and fairness using cryptographic hashing, allowing users to verify game outcomes.



## ✨ Features

- Fair & Transparent Rolls – Uses cryptographic hashing for provable fairness.
- Real-time Balance Updates – Displays the user's balance dynamically.
- Interactive UI – Modern, responsive, and smooth animations.
- Secure Transactions – Ensures fair gameplay with backend validation.
- Web3 Ready (Bonus) – Potential for blockchain integration.



## 🛠 Tech Stack

#### Frontend (React/Next.js & TailwindCSS)
- Next.js – Fast & optimized frontend framework
- React.js – Component-based UI development
- Axios – API requests for fetching data

#### Backend (Node.js & Express.js)

- Express.js – Handles server logic and API requests
- Crypto – Ensures provable fairness using hashing
- Mongoose – Manages MongoDB interactions
- CORS – Secure cross-origin requests



## 🚀 How it works
- User Inputs Bet Amount – Players enter the amount they want to bet.
- Server Generates Random Roll – A cryptographic seed determines the dice outcome.
- Fairness Verification – A hash of the roll is provided to ensure transparency.
- Balance Updates – Winnings are credited, and losses are deducted.



## 📌 Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/Provably-Fair-Dice-Game.git

```
Go to the project directory:

```bash
cd Provably-Fair-Dice-Game

```

Install dependencies for backend:

```bash
cd backend  
npm install  
```

Install dependencies for frontend:

```bash
cd ../frontend  
npm install  
```

Start the backend server:

```bash
cd backend  
npm start 
```

Run the frontend:

```bash
cd frontend  
npm run dev   
```
