const dotenv = require("dotenv").config(); // required for process.env
import "mocha";
import { applicationsTest } from "./routeTests";

applicationsTest();
