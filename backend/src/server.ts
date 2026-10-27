import express = require("express");
import type { Request, Response } from "express";
import cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "API funcionando com Node.js e TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});