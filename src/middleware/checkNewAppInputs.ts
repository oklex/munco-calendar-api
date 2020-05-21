import { Request, Response, NextFunction } from "express";
import {
	checkWebsite,
	checkName,
	checkOrganizationType,
	checkValidDate,
	checkApplicationType,
} from "../utils/CheckInput";
import { checkPathInUse } from "../database/Firebase";
import { calendarDataPath } from "../database/constants";

export const checkNewAppValidInput = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// check { req.body. {short_name, full_name, organization_type, website, running_since } }
	// -> create a general purpose checking function that takes in "rules"
	console.log("checking input at \"checkNewAppValidInput\": ", req.body)
	if (
		checkName(req.body.name) &&
		checkValidDate(req.body.start_date) &&
		checkValidDate(req.body.end_date) &&
		checkWebsite(req.body.applicationLink) &&
		(await checkApplicationType(req.body.type)) &&
		(await checkPathInUse(calendarDataPath, req.body.website_key))
	) {
		next();
	} else {
		console.log("invalid input fields")
		res.status(400).send("invalid input fields");
	}
};
