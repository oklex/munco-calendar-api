import { Request, Response, NextFunction } from "express";
import {
	checkWebsite,
	checkName,
	checkOrganizationType,
	checkValidDate,
	checkApplicationType,
} from "../utils/CheckInput";

export const checkAppValidInput = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// check { req.body. {short_name, full_name, organization_type, website, running_since } }
	// -> create a general purpose checking function that takes in "rules"
	if (
		checkName(req.body.name) &&
		checkValidDate(req.body.start_date) &&
		checkValidDate(req.body.end_date) &&
		(await checkWebsite(req.body.applicationLink)) &&
		(await checkApplicationType(req.body.type)) &&
		(await checkWebsite(req.body.organizationSite))
	) {
		next();
	} else {
		res.status(400).send("invalid input fields");
	}
};
