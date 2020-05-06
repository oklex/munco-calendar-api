import { Request, Response } from "express";
import firebase from "firebase";
import { getDomain, getDomainKey } from "../../utils/getDomain";
import { dbUpdate } from "../../database/Firebase";
import { getOrganizationPath } from "../../database/getPaths";

export const organization_post_new = async function (
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
		res.status(500).send("internal error: " + err);
	}
};

export const organization_patch_byID = async function (
	req: Request,
	res: Response
) {
	try {
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
		res.send("Prototype route: delete by Firebase obj key");
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};
