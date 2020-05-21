import { IOrganization, IApplication } from "../models/CalendarResponse";
import app from "../app";
import moment from "moment";

export let MapOrgSnapshot = (orgObj: any, website_key?: string): IOrganization => {
	if (
		orgObj.short_name &&
		orgObj.full_name &&
		orgObj.organization_type &&
		orgObj.website &&
		orgObj.running_since
	) {
		let responseObj: IOrganization = {
			website_key: website_key,
			short_name: orgObj.short_name,
			full_name: orgObj.full_name,
			organization_type: orgObj.organization_type,
			website: orgObj.website,
			running_since: orgObj.running_since,
		};
		return responseObj;
	} else {
		console.log("Invalid organization data: ", orgObj)
		throw Error("This Organization object is invalid: " + orgObj);
	}
};

// export let MapAppSnapshot = (appObj: any): IApplication => {
// 	if (
// 		appObj.name &&
// 		appObj.type &&
// 		appObj.start_date &&
// 		appObj.end_date &&
// 		appObj.dates_tentative &&
// 		appObj.applicationLink
// 	) {
// 		let responseObj: IApplication = {
// 			application_key: appObj.key,
// 			name: appObj.name,
// 			type: appObj.type,
// 			start_date: appObj.start_date,
// 			end_date: appObj.end_date,
// 			dates_tentative: appObj.dates_tentative,
// 			applicationLink: appObj.applicationLink,
// 			cost: appObj.cost ? appObj.cost : null
// 		};
// 		return responseObj;
// 	} else {
// 		console.log("Invalid app data: ", appObj)
// 		throw Error("This Application object is invalid: " + appObj);
// 	}
// };

export let MapAppArraySnapShot = (appArray: any): IApplication[] => {
	let apps: IApplication[] = []
	let keys: string[] = Object.keys(appArray);
	keys.forEach((key: any) => {
		// console.log("key: ", key, appArray[key])
		apps.push({
			application_key: key,
			name: appArray[key].name,
			type: appArray[key].type,
			start_date: appArray[key].start_date,
			end_date: appArray[key].end_date,
			dates_tentative: appArray[key].dates_tentative,
			applicationLink: appArray[key].applicationLink,
			cost: appArray[key].cost
		})
	})
	return apps
}


export let MapAppArraySnapShotIfValid = async (appArray: any): Promise<IApplication[]> => {
	let apps: IApplication[] = []
	let keys: string[] = Object.keys(appArray);
	let currentDate: Date = new Date();

	await Promise.all(keys.map((key: any) => {
		// console.log("key: ", key, appArray[key])
		// console.log("dates: ", appArray[key].end_date, currentDate, moment(appArray[key].end_date).isAfter(currentDate))
		if (moment(appArray[key].end_date).isAfter(currentDate)) {
			apps.push({
				application_key: key,
				name: appArray[key].name,
				type: appArray[key].type,
				start_date: appArray[key].start_date,
				end_date: appArray[key].end_date,
				dates_tentative: appArray[key].dates_tentative,
				applicationLink: appArray[key].applicationLink,
				cost: appArray[key].cost
			})
		}
	}))
	return apps
}