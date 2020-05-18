import { Request, Response, NextFunction } from "express";
import {
	checkWebsite,
	checkName,
	checkOrganizationType,
	checkValidDate,
} from "../utils/CheckInput";
import { IOrganization } from "../models/CalendarResponse";
import { checkPathInUse } from "../database/checkPaths";
import { getOrganizationPathFromWebsite } from "../database/getPaths";
import { calendarDataPath } from "../database/constants";
import { getDomainKey } from "../utils/getDomain";

export const checkOrgValidInput = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// check { req.body. {short_name, full_name, organization_type, website, running_since } }
	// -> create a general purpose checking function that takes in "rules"
	console.log("checking input at \"checkOrgValidInput\": ", req.body)
	if (
		checkName(req.body.short_name) &&
		checkName(req.body.full_name) &&
		(await checkWebsite(req.body.website)) &&
		(await checkOrganizationType(req.body.organization_type)) &&
		checkValidDate(req.body.running_since) &&
		!(await checkPathInUse(calendarDataPath, getDomainKey(req.body.website)))
	) {
		next();
	} else {
		console.log("invalid input fields")
		res.status(400).send("invalid input fields");
	}
};
