import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
} from "../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../utils/GetData";

// get all
export const applications_get_all = async function (
	req: Request,
	res: Response
) {
	try {
		let currentDate: Date = new Date();
		let data: ICalendarResponse[] = getCalendarData();
		let results: ICalendarResponse[] = [];
		await Promise.all(
			data.map(async (obj: ICalendarResponse) => {
				// delete all apps that have closed
				let tempApps: IApplication[] = [];
				await Promise.all(
					obj.applications.map((app) => {
						if (app.end_date > currentDate) {
							tempApps.push(app);
						}
					})
				);
				obj.applications = tempApps;
				results.push(obj);
			})
		)
			.then(async () => {
				// filter all objects with no apps
				let returnArray: ICalendarResponse[] = [];
				await Promise.all(
					results.map(async (obj: ICalendarResponse) => {
						if (obj.applications && obj.applications.length > 0)
							returnArray.push(obj);
					})
				).catch((err) => {
					res.status(500).send(err);
				});
				return returnArray;
			})
			.then((returnArray) => {
				res.send(returnArray);
			})
			.catch((err) => {
				res.status(500).send(err);
			});
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
		let currentDate: Date = new Date();
		let data: ICalendarResponse[] = getCalendarData();
		let results: ICalendarResponse[] = [];
		await Promise.all(
			data.map(async (obj: ICalendarResponse) => {
				// delete all apps that have closed
				let tempApps: IApplication[] = [];
				await Promise.all(
					obj.applications.map((app) => {
						if (app.end_date > currentDate) {
							tempApps.push(app);
						}
					})
				);
				obj.applications = tempApps;
				results.push(obj);
			})
		)
			.then(async () => {
				// filter all objects with no apps
				let filteredByEmptyApps: ICalendarResponse[] = [];
				await Promise.all(
					results.map(async (obj: ICalendarResponse) => {
						if (obj.applications && obj.applications.length > 0)
							filteredByEmptyApps.push(obj);
					})
				).catch((err) => {
					res.status(500).send(err);
				});
				return filteredByEmptyApps;
			})
			.then((returnArray) => {
				returnArray.sort((alpha, beta) => {
					let alphaUpcomingDate: Date = findLargestAppEndDate(alpha);
					let betaUpcomingDate: Date = findLargestAppEndDate(beta);
					if (alphaUpcomingDate > betaUpcomingDate) return 1;
					else if (alphaUpcomingDate < betaUpcomingDate) return -1;
					else return 0;
				});
				return returnArray;
			})
			.then((returnArray) => {
				res.send(returnArray);
			})
			.catch((err) => {
				res.status(500).send(err);
			});
	} catch (err) {
		res.status(500).send(err);
	}
};

// get upcoming
