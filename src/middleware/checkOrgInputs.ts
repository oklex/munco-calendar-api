import { Request, Response, NextFunction } from "express";
import { checkWebsite, checkName } from "../utils/CheckInput";

export const checkValidInput = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// check { req.body. {short_name, full_name, organization_type, website, running_since } }
	// -> create a general purpose checking function that takes in "rules"
	if (
		checkName(req.body.short_name) &&
		checkName(req.body.full_name) &&
		(await checkWebsite(req.body.website))
	) {
		next();
	} else {
		res.status(400).send("invalid input fields");
	}
};
