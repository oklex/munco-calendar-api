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
	console.log("checking input at \"checkAppValidInput\": ", req.body)
	if (
		checkName(req.body.name) &&
		checkValidDate(req.body.start_date) &&
		checkValidDate(req.body.end_date) &&
		checkWebsite(req.body.applicationLink) &&
		(await checkApplicationType(req.body.type)) &&
		checkWebsite(req.body.organizationSite)
	) {
		next();
	} else {
		// console.log(checkName(req.body.name) )
		// console.log(checkValidDate(req.body.start_date) )
		// console.log(checkValidDate(req.body.end_date))
		// console.log((await checkWebsite(req.body.applicationLink)) )
		// console.log((await checkApplicationType(req.body.type)) )
		// console.log((await checkWebsite(req.body.organizationSite)))

		res.status(400).send("invalid input fields");
	}
};
