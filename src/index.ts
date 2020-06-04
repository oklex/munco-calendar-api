const dotenv = require("dotenv").config(); // required for process.env
import { Request, Response } from "express";
import app from "./app";
import InitializeDatabase from "./database/Firebase";
import path from 'path'
import express from 'express'

const port = process.env.PORT || 8081;

try {
	InitializeDatabase();
} catch (err) {
	console.log(err);
	throw err;
}
app.get("/admin", (req: Request, res: Response) => {
	res.writeHead(302, { Location: "https://d11fve0gjth9dy.cloudfront.net/" });
	res.end();
});
app.listen(port, () => {
	console.log("App is running at port " + port);
});

// Serve any static files
app.use(express.static(path.join(__dirname, '../web-build')))
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '../web-build', 'index.html'))
})