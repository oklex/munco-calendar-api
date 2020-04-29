import { Router, Request, Response, NextFunction } from "express";
import { post_new_organization } from "../controllers/organizationsController";
const organizationRoute = Router();

organizationRoute.post('/new', post_new_organization)

export default organizationRoute