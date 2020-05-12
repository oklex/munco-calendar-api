import { Request, Response, NextFunction } from "express";
import {
	checkWebsite,
	checkName,
	checkOrganizationType,
	checkValidDate,
} from "../utils/CheckInput";
import { IOrganization } from "../models/CalendarResponse";
import { checkPathNotNull } from "../database/checkPaths";
import { getOrganizationPathFromWebsite } from "../database/getPaths";
import { calendarDataPath } from "../database/constants";

export const checkOrgValidInput = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// check { req.body. {short_name, full_name, organization_type, website, running_since } }
	// -> create a general purpose checking function that takes in "rules"
	if (
		checkName(req.body.short_name) &&
		checkName(req.body.full_name) &&
		(await checkWebsite(req.body.website)) &&
		(await checkOrganizationType(req.body.organization_type) &&
		checkValidDate(req.body.running_since)) &&
		!(await checkPathNotNull(calendarDataPath, req.body.website))
	) {
		next();
	} else {
		res.status(400).send("invalid input fields");
	}
};
