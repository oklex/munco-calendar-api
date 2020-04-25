const dotenv = require("dotenv").config();
var cors = require("cors");

import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import bodyParser from "body-parser";
import api from "./routes";
import FirebaseInitialize from "./database/Firebase";
import getCalendarData from "./utils/GetData";

const port = process.env.PORT || 8081;

try {
  getCalendarData(); // ensure that NODE_ENV is valid
  FirebaseInitialize();
} catch (err) {
  console.log(err);
  throw err;
}

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.use("/api", api);

app.listen(port, () => {
  console.log("App is running at port " + port);
});
