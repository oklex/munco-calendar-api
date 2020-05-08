import { Request, Response } from "express";
import firebase from "firebase";
import { getDomain, getDomainKey } from "../../utils/getDomain";
import { dbSet, dbUpdate, dbDelete } from "../../database/Firebase";
import { getOrganizationPath } from "../../database/getPaths";
import {
	checkName,
	checkWebsite,
	checkOrganizationType,
	checkValidDate,
} from "../../utils/CheckInput";
import { IOrganizationRequest } from "../../models/CalendarRequests";

export const organization_post_new = async function (
	req: Request,
	res: Response
) {
	try {
		await dbSet(getOrganizationPath(req.body.website), req.body).then(() => {
			res.send("post successful");
		});
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};

export const organization_patch_byID = async function (
	req: Request,
	res: Response
) {
	try {
		let newOrg: IOrganizationRequest = {};
		if (req.body.short_name && checkName(req.body.short_name))
			newOrg.short_name = req.body.short_name;
		if (req.body.full_name && checkName(req.body.full_name))
			newOrg.full_name = req.body.full_name;
		if (
			req.body.organization_type &&
			checkOrganizationType(req.body.organization_type)
		)
			newOrg.organization_type = req.body.organization_type;
		if (req.body.website && checkWebsite(req.body.website))
			newOrg.website = req.body.website;
		if (req.body.running_since && checkValidDate(req.body.running_since))
			newOrg.running_since = req.body.running_since;

		await dbUpdate(getOrganizationPath(req.body.website_key), newOrg).then(
			() => {
				res.send("patch successful");
			}
		);
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};

export const organization_delete_byID = async function (
	req: Request,
	res: Response
) {
	try {
		dbDelete(getOrganizationPath(req.body.website_key)).then(() => {
			res.send("delete successful");
		});
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};
