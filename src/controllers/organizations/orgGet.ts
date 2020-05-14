import { Request, Response } from "express";
import { dbDelete, dbGetOnce } from "../../database/Firebase";
import { calendarDataPath } from "../../database/constants";
import {
	IOrganization,
	ICalendarResponse,
	IApplication,
	IEvent,
} from "../../models/CalendarResponse";
import { MapOrgSnapshot, MapAppArraySnapShot } from "../../utils/MapSnapShot";
import { getOrganizationPath } from "../../database/getPaths";

export const organizations_get_all = async function (
	req: Request,
	res: Response
) {
	try {
		let allOrgs: IOrganization[] = [];
		let data: any = await dbGetOnce(calendarDataPath);
		let keys: string[] = Object.keys(data.val());

		keys.forEach((key: string) => {
			allOrgs.push(MapOrgSnapshot(data.val()[key], key));
		});
		res.send(allOrgs);
	} catch (err) {
		console.log(err);
		res.status(500).send("GET failed " + err);
	}
};

export const organizations_get_byID = async function (
	req: Request,
	res: Response
) {
	try {
		// map the results onto an obj of Organization request
		// if url params for include have "all", "applications", or "events" then include them
		let orgKey: string = req.params.id;
		let urlParams: any = req.query;
		let includeApps: boolean = false;
		let includeEvents: boolean = false;
		if (urlParams["include"] && urlParams["include"] == "events") {
			includeEvents = true;
		} else if (urlParams["include"] && urlParams["include"] == "applications") {
			includeApps = true;
		} else if (urlParams["include"] && urlParams["include"] == "all") {
			includeEvents = true;
			includeApps = true;
		}

		let data: any = await dbGetOnce(getOrganizationPath(orgKey));
		let resOrganization: IOrganization = MapOrgSnapshot(data.val(), orgKey);
		let resApps: IApplication[] = [];
		let eventApps: IEvent[] = [];
		if (data.val().applications) {
			// console.log("response data: ", data.val().applications);
			// console.log("response data: ", Object.keys(data.val().applications));
			resApps = MapAppArraySnapShot(data.val().applications)
		}
		let response: ICalendarResponse = {
			organization: resOrganization,
			events: includeEvents ? eventApps : null,
			applications: includeApps ? resApps : null,
		};
		res.send(response);
	} catch (err) {
		console.log(err);
		res.status(500).send("GET failed" + err);
	}
};
