import { ICalendarResponse } from "../models/CalendarResponse";

export function findLargestAppEndDate(alpha: ICalendarResponse) {
  let alphaAppDate: Date = new Date();
  // default value is v high
  alphaAppDate.setFullYear(alphaAppDate.getFullYear() + 10);
  if (alpha.applications && alpha.applications.length > 0) {
    // select the largest
    alpha.applications.forEach((app, index) => {
      if (index == 0) {
        alphaAppDate = app.end_date;
      } else if (app.end_date < alphaAppDate) {
        alphaAppDate = app.end_date;
      }
    });
  }
  return alphaAppDate;
}

export function findLargestAppStartDate(alpha: ICalendarResponse) {
  let alphaAppDate: Date = new Date();
  // default value is v high
  alphaAppDate.setFullYear(alphaAppDate.getFullYear() + 10);
  if (alpha.applications && alpha.applications.length > 0) {
    // select the largest
    alpha.applications.forEach((app, index) => {
      if (index == 0) {
        alphaAppDate = app.start_date;
      } else if (app.start_date < alphaAppDate) {
        alphaAppDate = app.start_date;
      }
    });
  }
  return alphaAppDate;
}
