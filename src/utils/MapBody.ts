import { IApplicationRequest, IOrganizationRequest, IEventRequest } from "../models/CalendarRequests"
import { IApplicationType, IEvent, IApplication } from "../models/CalendarResponse"
import { checkName, checkApplicationType, checkValidDate, checkWebsite, checkOrganizationType, CheckDateOrder } from "./CheckInput";
import moment, { Moment } from "moment";

export let MapBodyToApp = (body:any): IApplication => {
    // pre-condition all attributes must be real and valid
    let startDate: Date = body.start_date
    let endDate: Date = body.end_date
    let newApp: IApplication = {
        name: body.name,
        type: body.type,
        start_date: startDate,
        end_date: endDate,
        dates_tentative: false,
        applicationLink: body.applicationLink,
        cost: 0,
    };
    return newApp
}

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
    if (body.short_name && checkName(body.short_name)) {
        orgReq.short_name = body.short_name;
    }
    if (body.full_name && checkName(body.full_name)) {
        orgReq.full_name = body.full_name;
    }
    if (
        body.organization_type &&
        checkOrganizationType(body.organization_type)
    ) {
        orgReq.organization_type = body.organization_type;
    }
    if (body.website && checkWebsite(body.website)) {
        orgReq.website = body.website;
    }
    if (body.running_since && checkValidDate(body.running_since)) {
        orgReq.running_since = body.running_since;
    }
    return orgReq
}

export let MapBodyToEventRequest = async (body: any): Promise<IEventRequest> => {
    let eventReq: IEventRequest = {}
    if (body.venue_name && checkName(body.venue_name)) {
        eventReq.venue_name = body.venue_name
    }
    if (body.venue_city && checkName(body.venue_city)) {
        eventReq.venue_city = body.venue_city
    }
    if (body.tags) {
        let tags: string[] = body.tags.split(',')
        let validTags: boolean[] = await Promise.all(tags.map((tag) => {
            return checkName(tag)
        }))
        if (validTags.reduce((total, current) => {
            return total && current
        })) {
            eventReq.tags = body.tags
        }
    }
    if (CheckDateOrder(body.start_date, body.end_date)) {
        eventReq.start_date = body.start_date
        eventReq.end_date = body.end_date
    }
    return eventReq
}

export let MapBodyToEvent = (body: any): IEvent => {
    // pre-condition: all attributes have been checked for validity
    let event: IEvent = {
        venue_name: body.venue_name,
        venue_city: body.venue_city,
        start_date: body.start_date,
        end_date: body.end_date,
        dates_tentative: body.dates_tentative ? body.dates_tentative : true,
        tags: body.tags ? body.tags : [""]
    }
    return event
}