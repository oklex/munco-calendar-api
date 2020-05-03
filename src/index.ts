const dotenv = require("dotenv").config(); // required for process.env
import getCalendarData from "./utils/GetData";
import app from "./app";
import FirebaseInitialize from "./database/Firebase";

const port = process.env.PORT || 8081;

try {
	getCalendarData(); // ensure that NODE_ENV is valid
	FirebaseInitialize();
} catch (err) {
	console.log(err);
	throw err;
}

app.listen(port, () => {
	console.log("App is running at port " + port);
});
