const dotenv = require("dotenv").config(); // required for process.env
import "mocha";
import { applicationsGetTests } from "./applications/getTests";
import { applicationsPostTests } from "./applications/postTests";
import { organizationPostTests } from "./organizations/postTests";
import InitializeDatabase from "../src/database/Firebase";

// use mocha programmatically 
function main() {
	if (process.env.NODE_ENV || process.env.GITHUB_ACTIONS) {
		InitializeDatabase();
		applicationsGetTests();
		applicationsPostTests();
		organizationPostTests();
	} else {
		throw Error("Error: NODE_ENV not found");
	}
}

main();