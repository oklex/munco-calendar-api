import { IOrganization, IApplication } from "../models/CalendarResponse";

export let MapOrgSnapshot = (orgObj: any): IOrganization => {
	if (
		orgObj.short_name &&
		orgObj.full_name &&
		orgObj.organization_type &&
		orgObj.website &&
		orgObj.running_since
	) {
		let responseObj: IOrganization = {
			short_name: orgObj.short_name,
			full_name: orgObj.full_name,
			organization_type: orgObj.organization_type,
			website: orgObj.website,
			running_since: orgObj.running_since,
		};
		return responseObj;
	} else {
		throw Error("This Organization object is invalid: " + orgObj);
	}
};

export let MapAppSnapshot = (appObj: any): IApplication => {
	if (
		appObj.name &&
		appObj.type &&
		appObj.start_date &&
		appObj.end_date &&
		appObj.dates_tentative &&
        appObj.applicationLink
	) {
		let responseObj: IApplication = {
            name: appObj.name,
            type: appObj.type,
            start_date: appObj.start_date,
            end_date: appObj.end_date,
            dates_tentative: appObj.dates_tentative,
            applicationLink: appObj.applicationLink,
            cost: appObj.cost ? appObj.cost : null
		};
		return responseObj;
	} else {
		throw Error("This Organization object is invalid: " + appObj);
	}
};
