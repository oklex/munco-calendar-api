import { Request, Response, NextFunction } from "express";
import {
	checkWebsite
} from "../utils/CheckInput";
import { IOrganization } from "../models/CalendarResponse";
import { checkPathNotNull } from "../database/checkPaths";
import { getApplicationsPath } from "../database/getPaths";

export const checkAppPatchInput = async (req: Request, res: Response, next: NextFunction) => {
	if (
		req.body.website_key &&
		checkWebsite(req.body.website_key) &&
		(await checkPathNotNull(
			getApplicationsPath(req.body.website_key),
			req.params.id
		))
	) {
		next()
	} else {
        res.status(400).send("missing identifying information");
    }
};
