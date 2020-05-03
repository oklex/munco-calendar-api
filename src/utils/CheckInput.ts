//@ts-ignore
import whois from "whois-promise";
import { IOrganizationType, IApplicationType } from "../models/CalendarResponse";

export let checkName = (name: string): boolean => {
	if (name) {
		let regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);
		// console.log("checkNames read string: ", name.match(regex).toString());
		if (name.match(regex) && name == name.match(regex).toString()) return true;
		else return false;
	} else {
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
	} else return false;
};

export let checkOrganizationType = async (org: string) => {
	let returnVal: boolean = false;
	await Promise.all(
		Object.keys(IOrganizationType).map(async (obj: string) => {
			if (obj === org || (<any>IOrganizationType)[obj] === org) {
				returnVal = true;
			}
		})
	);
	return returnVal;
};


export let checkApplicationType = async (app: string) => {
	let returnVal: boolean = false;
	await Promise.all(
		Object.keys(IApplicationType).map(async (obj: string) => {
			if (obj === app || (<any>IApplicationType)[obj] === app) {
				returnVal = true;
			}
		})
	);
	return returnVal;
};

export let checkValidDate = (date: string) => {
	let checkDate: number = Date.parse(date)
	if (checkDate) return true
	else return false
}