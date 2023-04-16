import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ deu: "certo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
