import { Router, Request, Response, NextFunction } from "express";
import {findLargestAppEndDate, findLargestAppStartDate } from "../../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
	IOrganization,
} from "../../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../../utils/GetData";
import { dbPush, dbGetOnce } from "../../database/Firebase";
import { getApplicationsPath, getOrganizationPath } from "../../database/getPaths";
import { MapOrgSnapshot, MapAppArraySnapShot, MapAppArraySnapShotIfValid } from "../../utils/MapSnapShot";

// get all
export const applications_get_all = async function (
	req: Request,
	res: Response
) {
	try {
		let rawData: any = await dbGetOnce(getOrganizationPath(""));
		let responses: any = rawData.val()
		let keys: string[] = Object.keys(responses)
		let returnResponses: ICalendarResponse[] = []
		// console.log(keys, responses)

		await Promise.all(keys.map(async (key) => {
			// console.log("accessing single obj: ", responses[key])
			let response: ICalendarResponse = responses[key]
			if (response.applications) {
				let apps: IApplication[] = await MapAppArraySnapShotIfValid(response.applications)
				console.log(apps)
				returnResponses.push({
					organization: MapOrgSnapshot(response, key),
					events: [],
					applications: apps
				})
			}
			return 0
		})
		)
		
		returnResponses.sort((alpha, beta) => {
			let alphaUpcomingDate: Date = findLargestAppStartDate(alpha);
			let betaUpcomingDate: Date = findLargestAppStartDate(beta);
			if (alphaUpcomingDate > betaUpcomingDate) return 1;
			else if (alphaUpcomingDate < betaUpcomingDate) return -1;
			else return 0;
		});

		console.log("returning: ", returnResponses)
		res.send(returnResponses)
	} catch (err) {
		res.status(500).send(err);
	}
};

export const applications_get_upcoming = async function (
	req: Request,
	res: Response
) {
	console.log("api/applications/upcoming");
	try {
		let rawData: any = await dbGetOnce(getOrganizationPath(""));
		let responses: any = rawData.val()
		let keys: string[] = Object.keys(responses)
		let returnResponses: ICalendarResponse[] = []

		await Promise.all(keys.map((key) => {
			// console.log("accessing single obj: ", responses[key])
			let response: ICalendarResponse = responses[key]
			if (response.applications) {
				returnResponses.push({
					organization: MapOrgSnapshot(response, key),
					events: [],
					applications: MapAppArraySnapShot(response.applications)
				})
			}
			return 0
		}))

		returnResponses.sort((alpha, beta) => {
			let alphaUpcomingDate: Date = findLargestAppStartDate(alpha);
			let betaUpcomingDate: Date = findLargestAppStartDate(beta);
			if (alphaUpcomingDate > betaUpcomingDate) return 1;
			else if (alphaUpcomingDate < betaUpcomingDate) return -1;
			else return 0;
		});

		console.log("returning: ", returnResponses)
		res.send(returnResponses.slice(0, 5))
	} catch (err) {
		res.status(500).send(err);
	}
};