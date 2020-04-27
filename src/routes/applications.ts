import { Router, Request, Response, NextFunction } from "express";
import {
	applications_get_all,
	applications_get_upcoming,
} from "../controllers/applicationsController";

const applicationRoute = Router();

applicationRoute.get("/all", applications_get_all);

applicationRoute.get("/upcoming", applications_get_upcoming);

export default applicationRoute;
