import { Router, Request, Response, NextFunction } from "express";
import { post_new_organization, checkValidInput } from "../controllers/organizationsController";
const organizationRoute = Router();

organizationRoute.post('/new', checkValidInput, post_new_organization)

export default organizationRoute