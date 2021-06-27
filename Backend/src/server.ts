import express, { Request, Response } from "express";
import { router } from "../src/routes";

const app = express();

import "./database";

app.use(express.json());

app.use(router);

//para ler os erros
app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});
app.listen(3333, () => {
  console.log("server is running");
});
