import { Request, Response, NextFunction } from "express";
import { checkWebsite, checkName } from "../utils/CheckInput";

export const post_new_organization = async function (
	req: Request,
	res: Response
) {
	try {
		// check { req.body. {short_name, full_name, organization_type, website, running_since } }
		// -> create a general purpose checking function that takes in "rules"
		res.send("PROTOTPYE ROUTE: /api/organizations/new");
		// 1 check DB for the uniqueness of candidate keys {website}
		// 2 create default information? nope
		// 3 fail if any data is missing
		// 4 add to unique firebase route
	} catch (err) {
		// console.log(err)
		res.status(500).send("internal error: " + err);
	}
};

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
