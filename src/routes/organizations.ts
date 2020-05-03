import { Router, Request, Response, NextFunction } from "express";
import { post_new_organization } from "../controllers/organizationsController";
import { checkOrgValidInput } from "../middleware/checkOrgInputs";

const organizationRoute = Router();

organizationRoute.post('/new', checkOrgValidInput, post_new_organization)

export default organizationRoute