const dotenv = require("dotenv").config(); // required for process.env
import "mocha";
import { applicationsTest } from "./routeTests";

if (process.env.NODE_ENV) {
    applicationsTest();
} else {
    throw Error("Error: NODE_ENV not found")
}