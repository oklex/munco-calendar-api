import { getDomainKey } from "../utils/getDomain"
import { calendarDataPath, orgApplicationsPath } from "./constants"
import applicationRoute from "../routes/applications"

export let getOrganizationPathFromWebsite = (website:string):string => {
    return calendarDataPath + '/' + getDomainKey(website)
}

export let getOrganizationPath = (website_key:string):string => {
    return calendarDataPath + '/' + website_key
}

export let getApplicationsPath = (organizationSite: string):string => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath
}

export let getApplicationsPathWithKey = (website_key: string):string => {
    return calendarDataPath + '/' + website_key + orgApplicationsPath
}

export let getSingleApplicationPath = (organizationSite: string, applicationKey: string):string => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath + "/" + applicationKey
}

export let getSingleApplicationPathWithKey = (website_key: string, applicationKey: string):string => {
    return calendarDataPath + '/' + website_key + orgApplicationsPath + "/" + applicationKey
}