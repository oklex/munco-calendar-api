import { Request, Response, NextFunction } from "express";
import {
	checkWebsite
} from "../utils/CheckInput";
import { checkPathNotNull } from "../database/checkPaths";
import { calendarDataPath } from "../database/constants";
import { getDomainKey } from "../utils/getDomain";

export const checkOrgKey = async (req: Request, res: Response, next: NextFunction) => {
	if (
		req.body.website_key &&
		checkWebsite(req.body.website_key) &&
		(await checkPathNotNull(
			calendarDataPath,
			getDomainKey(req.body.website_key)
		))
	) {
		next()
	} else {
        res.status(400).send("missing identifying information");
    }
};