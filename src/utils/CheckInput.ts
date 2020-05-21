import {
	IOrganizationType,
	IApplicationType,
} from "../models/CalendarResponse";
import moment from "moment";

export let checkName = (name: string): boolean => {
	if (name) {
		let regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);
		// console.log("checkNames read string: ", name.match(regex).toString());
		if (name.match(regex) && name == name.match(regex).toString()) return true;
		else return false;
	} else {
		console.log("name is invalid: ", name);
		// throw Error("name is invalid: " + name)
		return false;
	}
};

export let checkWebsite = (websiteRaw: string): boolean => {
	let website: string = websiteRaw.trim()
	if (website.includes(' ')) {
		console.log("website is invalid: ", website);
		return false
	} else {
		return true;
	}
};

export let checkOrganizationType = async (org: string) => {
	let returnVal: boolean = false;
	await Promise.all(
		Object.keys(IOrganizationType).map(async (obj: string) => {
			if (obj.toUpperCase() === org.toUpperCase() || (<any>IOrganizationType)[obj] === org) {
				returnVal = true;
			}
		})
	).catch((err) => {
		console.log("website is invalid: ", org, err);
		throw Error(err);
	});
	return returnVal;
};

export let checkApplicationType = async (app: string) => {
	let returnVal: boolean = false;
	await Promise.all(
		Object.keys(IApplicationType).map(async (obj: string) => {
			if (obj.toUpperCase() === app.toUpperCase() || (<any>IApplicationType)[obj] === app) {
				returnVal = true;
			}
		})
	).catch((err) => {
		console.log("app type is invalid: ", app, err);
		throw Error(err);
	});
	return returnVal;
};

export let checkValidDate = (date: string) => {
	let checkDate: number = Date.parse(date);
	if (checkDate) return true;
	else {
		console.log("date is invalid: ", date);
		// throw Error("date is invalid: " + date)
		return false;
	}
};

export let CheckDateOrder = (start: Date, end: Date) => {
	if (!checkValidDate(start.toString()) || !checkValidDate(end.toString())) {
		throw Error("One or more Dates aren't valid")
	}
	console.log(start, end)
	let confirmOrder: boolean = moment(start).isBefore(end)
	// console.log(confirmOrder)
	return confirmOrder
}

