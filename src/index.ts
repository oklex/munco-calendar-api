const dotenv = require("dotenv").config();
var cors = require('cors')

import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import bodyParser from "body-parser";
import api from "./routes";

const port = process.env.PORT || 8081;

const app: Express = express();

app.use(bodyParser.json());
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});
app.use('/api', api)

app.listen(port, () => {
    console.log('App is running at port ' + port)
  })