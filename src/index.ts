const dotenv = require("dotenv").config(); // required for process.env
import app from "./app";
import InitializeDatabase from "./database/Firebase";

const port = process.env.PORT || 8081;

try {
	InitializeDatabase();
} catch (err) {
	console.log(err);
	throw err;
}

app.listen(port, () => {
	console.log("App is running at port " + port);
});
