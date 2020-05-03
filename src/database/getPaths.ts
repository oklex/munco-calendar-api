import { getDomainKey } from "../utils/getDomain"

const calendarDataPath: string = '/calendar'
const orgApplicationsPath: string = '/applications'

export let getOrganizationPath = (website:string) => {
    return calendarDataPath + '/' + getDomainKey(website)
}

export let getApplicationPath = (organizationSite: string) => {
    return calendarDataPath + '/' + getDomainKey(organizationSite) + orgApplicationsPath
}