import { Request, Response } from "express";
import firebase from "firebase";
import { getDomain, getDomainKey } from "../../utils/getDomain";
import { dbSet, dbUpdate, dbDelete } from "../../database/Firebase";
import { getOrganizationPathFromWebsite, getOrganizationPath } from "../../database/getPaths";
import {
	checkName,
	checkWebsite,
	checkOrganizationType,
	checkValidDate,
} from "../../utils/CheckInput";
import { IOrganizationRequest } from "../../models/CalendarRequests";
import { MapBodyToOrgRequest } from "../../utils/MapBody";

export const organization_post_new = async function (
	req: Request,
	res: Response
) {
	try {
		await dbSet(getOrganizationPathFromWebsite(req.body.website), req.body).then(() => {
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
		let newOrg: IOrganizationRequest = MapBodyToOrgRequest(req.body)

		await dbUpdate(getOrganizationPath(req.params.website_key), newOrg).then(
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
		dbDelete(getOrganizationPath(req.params.website_key)).then(() => {
			res.send("delete successful");
		});
	} catch (err) {
		res.status(500).send("internal error: " + err);
	}
};
