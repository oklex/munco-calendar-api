import { Router, Request, Response, NextFunction } from "express";
import { organization_post_new, organization_patch_byID, organization_delete_byID } from "../controllers/organizations/orgMod";
import { checkOrgValidInput } from "../middleware/checkNewOrgInputs";
import { checkOrgKey } from "../middleware/checkPatchOrgInput";

const organizationRoute = Router();

organizationRoute.post('/new', checkOrgValidInput, organization_post_new)

organizationRoute.patch('/:website_key', checkOrgKey, organization_patch_byID)

organizationRoute.delete('/:website_key', checkOrgKey, organization_delete_byID)

export default organizationRoute