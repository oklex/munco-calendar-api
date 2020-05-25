import { Request, Response, NextFunction } from "express";
import { checkPathInUse } from "../database/Firebase";
import { getApplicationsPathWithKey, getSingleEventsPathWithKey, getEventsPathWithKey } from "../database/getPaths";

export const checkAppIDInput = async (req: Request, res: Response, next: NextFunction) => {
	console.log("checking input at \"checkAppIDInput\": ", req.body, req.params.appId)
	if (
		req.body.website_key &&
		(await checkPathInUse(
			( getApplicationsPathWithKey(req.body.website_key)),
			req.params.appId
		))
	) {
		next()
	} else {
		console.log("missing identifying information")
        res.status(400).send("missing identifying information");
    }
};

export const checkEventIDInput = async (req: Request, res: Response, next: NextFunction) => {
	console.log("checking input at \"checkAppIDInput\": ", req.body, req.params.eventId)
	if (
		req.body.website_key &&
		(await checkPathInUse(
			( getEventsPathWithKey(req.body.website_key)),
			req.params.eventId
		))
	) {
		next()
	} else {
		console.log("missing identifying information")
        res.status(400).send("missing identifying information");
    }
};
