import {
	IOrganizationType,
	IApplicationType,
} from "../models/CalendarResponse";

export let checkName = (name: string): boolean => {
	if (name) {
		let regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);
		// console.log("checkNames read string: ", name.match(regex).toString());
		if (name.match(regex) && name == name.match(regex).toString()) return true;
		else return false;
	} else {
		// console.log("name is invalid: ", name);
		// throw Error("name is invalid: " + name)
		return false;
	}
};

export let checkWebsite = async (website: string): Promise<boolean> => {
	// check if it's unique (not on Firebase)
	// check whois
	if (website) {
		return true;
		// let whoisResult: boolean = false;
		// let result: any = await whois.json(website)
		// if (result) whoisResult = true;
		// else whoisResult = false;
		// console.log("during promise: ", whoisResult);
		// console.log("whois.lookup returns: ", website, result);
		// return whoisResult;
	} else {
		// console.log("website is invalid: ", website);
		// throw Error("website is invalid: " + website)
		return false;
	}
};

export let checkOrganizationType = async (org: string) => {
	let returnVal: boolean = false;
	await Promise.all(
		Object.keys(IOrganizationType).map(async (obj: string) => {
			if (obj === org || (<any>IOrganizationType)[obj] === org) {
				returnVal = true;
			}
		})
	).catch((err) => {
		// console.log("website is invalid: ", org);
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
		// console.log("app type is invalid: ", app);
		throw Error(err);
	});
	return returnVal;
};

export let checkValidDate = (date: string) => {
	let checkDate: number = Date.parse(date);
	if (checkDate) return true;
	else {
		// console.log("date is invalid: ", date);
		// throw Error("date is invalid: " + date)
		return false;
	}
};
