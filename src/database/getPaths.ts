import { getDomainKey } from "../utils/getDomain"
import { calendarDataPath, orgApplicationsPath } from "./constants"
import applicationRoute from "../routes/applications"

export let getOrganizationPath = (website:string):string => {
    return calendarDataPath + '/' + getDomainKey(website)
}

export let getApplicationsPath = (organizationSite: string):string => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath
}

export let getSingleApplicationPath = (organizationSite: string, applicationKey: string):string => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath + "/" + applicationKey
}