import { ICalendarResponse } from "../models/CalendarResponse";

function findLargestAppEndDate(alpha: ICalendarResponse) {
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
//   console.log("findLargestAppEndDate", alphaAppDate);
  return alphaAppDate;
}

export default findLargestAppEndDate;
