import express from "express";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Hallo von Express + TypeScript!" });
});

app.listen(port, () => {
  console.log(`API läuft auf http://localhost:${port}`);
});