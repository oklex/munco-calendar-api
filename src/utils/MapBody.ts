import { IApplicationRequest, IOrganizationRequest } from "../models/CalendarRequests"
import { IApplicationType } from "../models/CalendarResponse"
import { checkName, checkApplicationType, checkValidDate, checkWebsite, checkOrganizationType } from "./CheckInput";

export let MapBodyToAppRequest = (body: any): IApplicationRequest => {
    let appReq: IApplicationRequest = {}
    if (body.name && checkName(body.name)) appReq.name = body.name;
    if (body.type && checkApplicationType(body.type)) appReq.type = body.type;
    if (body.start_date && checkValidDate(body.start_date)) appReq.start_date = body.start_date;
    if (body.end_date && checkValidDate(body.end_date)) appReq.end_date = body.end_date;
    if (body.dates_tentative)
    appReq.dates_tentative = body.dates_tentative;
    if (body.applicationLink && checkWebsite(body.applicationLink))
    appReq.applicationLink = body.applicationLink;
    if (body.cost) appReq.cost = body.cost;
    return appReq
}

export let MapBodyToOrgRequest = (body: any): IOrganizationRequest => {
    let orgReq: IOrganizationRequest = {}
    if (body.short_name && checkName(body.short_name))
			orgReq.short_name = body.short_name;
		if (body.full_name && checkName(body.full_name))
			orgReq.full_name = body.full_name;
		if (
			body.organization_type &&
			checkOrganizationType(body.organization_type)
		)
			orgReq.organization_type = body.organization_type;
		if (body.website && checkWebsite(body.website))
			orgReq.website = body.website;
		if (body.running_since && checkValidDate(body.running_since))
			orgReq.running_since = body.running_since;
    return orgReq
}