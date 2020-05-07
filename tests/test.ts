const dotenv = require("dotenv").config(); // required for process.env
import "mocha";
import { applicationsGetTests } from "./applications/getTests";
import { applicationsPostTests } from "./applications/postTests";
import { organizationPostTests } from "./organizations/postTests";

if (process.env.NODE_ENV || process.env.GITHUB_ACTIONS) {
    applicationsGetTests();
    applicationsPostTests();
    organizationPostTests()
} else {
    throw Error("Error: NODE_ENV not found")
}