import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
} from "../../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../../utils/GetData";
import { dbPush, dbUpdate } from "../../database/Firebase";
import {
	getApplicationsPath,
	getOrganizationPath,
	getSingleApplicationPath,
} from "../../database/getPaths";
import { checkWebsite, checkName, checkValidDate, checkApplicationType } from "../../utils/CheckInput";
import { checkPathNotNull } from "../../database/checkPaths";

export const applications_create_new = async function (
	req: Request,
	res: Response
) {
	// check input (all present)
	// push to db (new route needed)
	try {
		let newApp: IApplication = {
			name: req.body.name,
			type: req.body.type,
			start_date: req.body.start_date,
			end_date: req.body.end_date,
			dates_tentative: false,
			applicationLink: req.body.applicationLink,
			cost: null,
		};
		await dbPush(getApplicationsPath(req.body.organizationSite), newApp).then(
			() => {
				res.send("success");
			}
		);
	} catch (err) {
		res.status(500).send(err);
	}
};

export const applications_patch_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// check that the ID exists on the organization key path
		interface IApplicationRequest {
			name?: string;
			type?: IApplicationType;
			start_date?: Date;
			end_date?: Date;
			dates_tentative?: boolean;
			applicationLink?: string;
			cost?: number;
		}

		let patchObj: IApplicationRequest = {};
		if (req.body.name) patchObj.name = req.body.name;
		if (req.body.type) patchObj.type = req.body.type;
		if (req.body.start_date) patchObj.start_date = req.body.start_date;
		if (req.body.end_date) patchObj.end_date = req.body.end_date;
		if (req.body.dates_tentative)
			patchObj.dates_tentative = req.body.dates_tentative;
		if (req.body.applicationLink)
			patchObj.applicationLink = req.body.applicationLink;
		if (req.body.cost) patchObj.cost = req.body.cost;

		console.log(patchObj);
		await dbUpdate(
			getSingleApplicationPath(req.body.website_key, req.params.id),
			patchObj
		)
			.then(() => {
				res.send("patch successful");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send("error updating data" + err);
			});
	} catch (err) {
		res.status(500).send("error updating data" + err);
	}
};

export const applications_delete_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// check that the ID exists on the organization key path
		// make a firebase delete call on the ID
		res.send("Prototype route: delete by Firebase obj key");
	} catch (err) {
		res.status(500).send(err);
	}
};

// get upcoming
