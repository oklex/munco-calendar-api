import { Router, Request, Response, NextFunction } from "express";
import {
	applications_get_all,
	applications_get_upcoming,
	applications_create_new,
} from "../controllers/applicationsController";
import { checkAppValidInput } from "../middleware/checkAppInputs";

const applicationRoute = Router();

applicationRoute.get("/all", applications_get_all);

applicationRoute.get("/upcoming", applications_get_upcoming);

applicationRoute.post("/new", checkAppValidInput, applications_create_new)

export default applicationRoute;
