import express from "express";
import { router } from "../src/routes";

const app = express();

import "./database";

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log("server is running");
});
