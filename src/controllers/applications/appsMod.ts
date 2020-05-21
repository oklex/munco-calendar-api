import { Request, Response, NextFunction } from "express";
import {
	IApplication,
} from "../../models/CalendarResponse";
import { dbPush, dbUpdate, dbDelete } from "../../database/Firebase";
import {
	getSingleApplicationPathWithKey,
	getApplicationsPathWithKey,
} from "../../database/getPaths";
import { IApplicationRequest } from "../../models/CalendarRequests";
import { MapBodyToAppRequest, MapBodyToApp } from "../../utils/MapBody";

export const applications_create_new = async function (
	req: Request,
	res: Response
) {
	// check input (all present)
	// push to db (new route needed)
		console.log("running post app", req.body);
	try {
		let newApp: IApplication = MapBodyToApp(req.body)
		await dbPush(getApplicationsPathWithKey(req.body.website_key), newApp).then(
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
		let patchObj: IApplicationRequest = MapBodyToAppRequest(req.body);
		console.log("running patch by app id: " + req.params.appId, req.body);
		await dbUpdate(
			getSingleApplicationPathWithKey(req.body.website_key, req.params.appId),
			patchObj
		)
			.then(() => {
				res.send("patch successful");
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send("error updating data " + err);
			});
	} catch (err) {
		res.status(500).send("error updating data " + err);
	}
};

export const applications_delete_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// check that the ID exists on the organization key path
		// make a firebase delete call on the ID
		console.log("deleting app:" + req.params.appId, req.body);
		let path: string = getSingleApplicationPathWithKey(
			req.body.website_key,
			req.params.appId
		);
		console.log("at path: " + path);
		await dbDelete(path)
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
