var cors = require("cors");

import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import bodyParser from "body-parser";
import api from "./routes";
import path from 'path'

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", api);
// app.use("/", express.static(path.join(__dirname, '../web-build')))
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../web-build', 'index.html'))
// })
export default app