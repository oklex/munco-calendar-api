import { Router, Request, Response, NextFunction } from "express";
import { organization_post_new, organization_patch_byID, organization_delete_byID } from "../controllers/organizations/orgMod";
import { checkOrgValidInput } from "../middleware/checkNewOrgInputs";

const organizationRoute = Router();

organizationRoute.post('/new', checkOrgValidInput, organization_post_new)

organizationRoute.patch('/:id', organization_patch_byID)

organizationRoute.delete('/:id', organization_delete_byID)

export default organizationRoute