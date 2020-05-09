import { Router, Request, Response, NextFunction } from "express";
import {
	organization_post_new,
	organization_patch_byID,
	organization_delete_byID,
} from "../controllers/organizations/orgMod";
import { checkOrgValidInput } from "../middleware/checkNewOrgInputs";
import { checkOrgKey } from "../middleware/checkPatchOrgInput";
import { checkAuthToken } from "../middleware/checkAuthToken";

const organizationRoute = Router();

organizationRoute.post(
	"/new",
	checkAuthToken,
	checkOrgValidInput,
	organization_post_new
);

organizationRoute.patch(
	"/:website_key",
	checkAuthToken,
	checkOrgKey,
	organization_patch_byID
);

organizationRoute.delete(
	"/:website_key",
	checkAuthToken,
	checkOrgKey,
	organization_delete_byID
);

export default organizationRoute;
