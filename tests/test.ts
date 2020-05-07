const dotenv = require("dotenv").config(); // required for process.env
import "mocha";
import { applicationsGetTests } from "./getTests";
import { applicationsPostTests } from "./postTests";

if (process.env.NODE_ENV || process.env.GITHUB_ACTIONS) {
    applicationsGetTests();
    applicationsPostTests();
} else {
    throw Error("Error: NODE_ENV not found")
}