import { Request, Response } from "express";
import firebase from "firebase";
import { getDomain, getDomainKey } from "../utils/getDomain";
import { dbUpdate } from "../database/Firebase";
import { getOrganizationPath } from "../database/getPaths";

export const post_new_organization = async function (
	req: Request,
	res: Response
) {
	try {
		// check { req.body. {short_name, full_name, organization_type, website, running_since } }
		// -> create a general purpose checking function that takes in "rules"
		dbUpdate(getOrganizationPath(req.body.website), req.body);
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
