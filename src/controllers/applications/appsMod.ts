import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
} from "../../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../../utils/GetData";
import { dbPush, dbUpdate, dbDelete } from "../../database/Firebase";
import {
	getApplicationsPath,
	getOrganizationPathFromWebsite,
	getSingleApplicationPath,
} from "../../database/getPaths";
import {
	checkWebsite,
	checkName,
	checkValidDate,
	checkApplicationType,
} from "../../utils/CheckInput";
import { checkPathNotNull } from "../../database/checkPaths";
import { IApplicationRequest } from "../../models/CalendarRequests";

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
				res.send("post successful");
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
		let patchObj: IApplicationRequest = {};
		if (req.body.name && checkName(req.body.name)) patchObj.name = req.body.name;
		if (req.body.type && checkApplicationType(req.body.type)) patchObj.type = req.body.type;
		if (req.body.start_date && checkValidDate(req.body.start_date)) patchObj.start_date = req.body.start_date;
		if (req.body.end_date && checkValidDate(req.body.end_date)) patchObj.end_date = req.body.end_date;
		if (req.body.dates_tentative)
			patchObj.dates_tentative = req.body.dates_tentative;
		if (req.body.applicationLink && checkWebsite(req.body.applicationLink))
			patchObj.applicationLink = req.body.applicationLink;
		if (req.body.cost) patchObj.cost = req.body.cost;

		await dbUpdate(
			getSingleApplicationPath(req.body.website_key, req.params.appId),
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
		await dbDelete(
			getSingleApplicationPath(req.body.website_key, req.params.appId)
		)
			.then(() => {
				res.send("delete successful");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send("error deleting data" + err);
			});
	} catch (err) {
		res.status(500).send(err);
	}
};

// get upcoming
