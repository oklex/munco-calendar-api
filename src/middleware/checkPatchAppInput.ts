import { Request, Response, NextFunction } from "express";
import {
	checkWebsite
} from "../utils/CheckInput";
import { IOrganization } from "../models/CalendarResponse";
import { checkPathInUse } from "../database/checkPaths";
import { getApplicationsPath, getApplicationsPathWithKey } from "../database/getPaths";
import { calendarDataPath, orgApplicationsPath } from "../database/constants";

export const checkAppIDInput = async (req: Request, res: Response, next: NextFunction) => {
	if (
		req.body.website_key &&
		(await checkPathInUse(
			( getApplicationsPathWithKey(req.body.website_key)),
			req.params.appId
		))
	) {
		next()
	} else {
        res.status(400).send("missing identifying information");
    }
};
