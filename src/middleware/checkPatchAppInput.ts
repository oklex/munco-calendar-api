import { Request, Response, NextFunction } from "express";
import { checkPathInUse } from "../database/checkPaths";
import { getApplicationsPathWithKey } from "../database/getPaths";

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
