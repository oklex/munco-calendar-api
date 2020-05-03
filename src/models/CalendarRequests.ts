import { IApplication, IEvent } from "./CalendarResponse";

export interface IApplicationRequest extends IApplication {
    organizationSite: string
}

export interface IEventRequest extends IEvent {
    organizationSite: string
}