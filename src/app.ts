var cors = require("cors");

import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import bodyParser from "body-parser";
import api from "./routes";

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", api);

export default app