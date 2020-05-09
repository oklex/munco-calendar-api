import { Router, Request, Response, NextFunction } from "express";
import {
	organization_post_new,
	organization_patch_byID,
	organization_delete_byID,
} from "../controllers/organizations/orgMod";
import { checkOrgValidInput } from "../middleware/checkNewOrgInputs";
import { checkOrgKey } from "../middleware/checkPatchOrgInput";
import { checkAuthToken } from "../middleware/checkAuthToken";
import { organizations_get_all, organizations_get_byID } from "../controllers/organizations/orgGet";

const organizationRoute = Router();

organizationRoute.get('/all', organizations_get_all)
organizationRoute.get('/:id', organizations_get_byID)

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
