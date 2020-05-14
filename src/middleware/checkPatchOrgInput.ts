import { Request, Response, NextFunction } from "express";
import {
	checkWebsite
} from "../utils/CheckInput";
import { checkPathInUse } from "../database/checkPaths";
import { calendarDataPath } from "../database/constants";
import { getDomainKey } from "../utils/getDomain";

export const checkOrgKey = async (req: Request, res: Response, next: NextFunction) => {
	console.log("checking input at \"checkOrgKey\": ", req.body)
	if (
		req.params.website_key &&
		(await checkPathInUse(
			calendarDataPath,
			req.params.website_key
		))
	) {
		next()
	} else {
        res.status(400).send("missing identifying information");
    }
};
