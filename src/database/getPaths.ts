import { getDomainKey } from "../utils/getDomain"
import { calendarDataPath, orgApplicationsPath } from "./constants"

export let getOrganizationPath = (website:string):string => {
    return calendarDataPath + '/' + getDomainKey(website)
}

export let getApplicationPath = (organizationSite: string):string => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath
}