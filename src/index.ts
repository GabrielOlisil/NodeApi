import express from "express";
import dotenv from "dotenv";

dotenv.config();

// Create an instance of the Express app
const app = express();

app.get("/", (req, res) => {
  res.json({
    deu: "certo",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${3000}`));
