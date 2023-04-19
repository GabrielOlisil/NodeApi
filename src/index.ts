import express from "express";
import dotenv from "dotenv";
import j from "./data/events.json";
import cors from "cors";

const router = express.Router();

dotenv.config();

const app = express();

router.get("/events", (req, res) => {
  res.json(j);
});

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(router);
app.listen(PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
