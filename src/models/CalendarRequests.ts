import { IApplication, IEvent, IApplicationType, IOrganizationType } from "./CalendarResponse";

export interface IOrganizationRequest {
    short_name?: string;
    full_name?: string;
    organization_type?: IOrganizationType;
    website?: string;
    running_since?: Date;
}

export interface IEventRequest {
    venue_name?: string;
    venue_city?: string;
    start_date?: Date;
    end_date?: Date | null;
    dates_tentative?: boolean;
    tags?: string[];
}

export interface IApplicationRequest {
    website_key?: string,
    name?: string;
    type?: IApplicationType;
    start_date?: Date;
    end_date?: Date;
    dates_tentative?: boolean;
    applicationLink?: string;
    cost?: number;
}