import { Request, Response } from "express";
import firebase from "firebase";
import { getDomain, getDomainKey } from "../../utils/getDomain";
import { dbSet } from "../../database/Firebase";
import { getOrganizationPath } from "../../database/getPaths";
import { checkName, checkWebsite, checkOrganizationType, checkValidDate } from "../../utils/CheckInput";

export const organization_post_new = async function (
	req: Request,
	res: Response
) {
	try {
		// check { req.body. {short_name, full_name, organization_type, website, running_since } }
		// -> create a general purpose checking function that takes in "rules"
		await dbSet(getOrganizationPath(req.body.website), req.body).then(() => {
			res.send("success");
		});
		// 1 check DB for the uniqueness of candidate keys {website}
		// 2 create default information? nope
		// 3 fail if any data is missing
		// 4 add to unique firebase route
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};

export const organization_patch_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// check that the ID exists on the path
		// find body keys that match valid options
		// make a firebase update call on the ID
		res.send("Prototype route: patch by Firebase obj key");
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};

export const organization_delete_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// check that the ID exists on the path
		// make a firebase delete call on the ID
		res.send("Prototype route: delete by Firebase obj key");
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};
