import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
} from "../../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../../utils/GetData";
import { dbPush } from "../../database/Firebase";
import { getApplicationPath } from "../../database/getPaths";

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
		dbPush(getApplicationPath(req.body.organizationSite), newApp);
		res.send("PROTOTPYE ROUTE: /api/applications/new");
	} catch (err) {
		res.status(500).send(err);
	}
};

export const applications_patch_byID = async function (req: Request, res: Response) {
	try {
		res.send("Prototype route: patch by Firebase obj key");
	} catch (err) {
		res.status(500).send(err);
	}
};

export const applications_delete_byID = async function (req: Request, res: Response) {
	try {
		res.send("Prototype route: delete by Firebase obj key");
	} catch (err) {
		res.status(500).send(err);
	}
};

// get upcoming
