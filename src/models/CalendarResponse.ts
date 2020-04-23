export interface ICalendarResponse {
  organization: IOrganization;
  event: IEvent | null;
  applications: IApplication[] | null;
}

export interface IOrganization {
  short_name: string;
  full_name: string;
  organization_type: IOrganizationType;
  website: string;
  running_since: Date;
}

export interface IEvent {
  venue_name: string;
  venue_city: string;
  start_date: Date;
  end_date: Date | null;
  dates_tentative: boolean;
  tags: string[];
}

export interface IApplication {
  name: string;
  type: IApplicationType;
  start_date: Date;
  end_date: Date;
  dates_tentative: boolean;
  applicationLink: string;
  cost: number | null;
}

export enum IApplicationType {
  Delegate = "Delegate Registration",
  School = "School Registration",
  Staff = "Staff Application",
  Secretariat = "Secretariat Application",
  Volunteer = "Volunteer Application",
  Other = "Other",
}

export enum IOrganizationType {
  nonProfit = "Registered non profit",
  schoolSponsored = "School Sponsored",
  studentProject = "Student Project"
}