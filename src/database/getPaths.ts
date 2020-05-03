import { getDomainKey } from "../utils/getDomain"

const calendarDataPath: string = '/calendar'

export let getOrganizationPath = (website:string) => {
    return calendarDataPath + '/' + getDomainKey(website)
}