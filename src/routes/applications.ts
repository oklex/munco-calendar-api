import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../utils/FindLargestAppEndDate";
import AllCalendarData from "../data/CalendarData";
import {
  ICalendarResponse,
  IApplicationType,
  IApplication,
} from "../models/CalendarResponse";

import moment from "moment";

const applicationRoute = Router();

applicationRoute.get("/all", async (req: Request, res: Response) => {
  console.log("api/applications/all");
  try {
    let currentDate: Date = new Date();
    let data: ICalendarResponse[] = AllCalendarData;
    let results: ICalendarResponse[] = []
    await Promise.all(data.map(async(obj: ICalendarResponse) => {
      if (obj.applications && obj.applications.length > 0) {
        // await Promise.all(obj.applications.filter(async (app) => {
        //   return app.end_date > currentDate;
        // }))
        results.push(obj)
      } 
    })).then(() => {
        res.send(results)
    }).catch((err) => {
        res.status(500).send(err)
    })
  } catch (err) {
    res.status(500).send(err);
  }
});

async function selectApplications(data: ICalendarResponse[]) {
  let currentDate: Date = new Date();
  let returnData: ICalendarResponse[] = [];
  console.log("p1", returnData);
  for (let i = 0; i < data.length; i++) {
    if (data[i].applications.length > 0) {
      let apps: IApplication[] = [];
      for (let j = 0; j < data[i].applications.length; j++) {
        if (data[i].applications[j].end_date > currentDate) {
          apps.push(data[i].applications[j]);
        }
      }
      if (apps.length > 0) {
        returnData.push({
          organization: data[i].organization,
          event: null,
          applications: apps,
        });
      }
    }
  }
  console.log("p2", returnData);
  return returnData;
}

async function filterApplications(apps: IApplication[]) {
  let currentDate: Date = new Date();
  if (apps.length > 0) {
    return apps.filter((app: IApplication) => {
      if (app.end_date > currentDate) return true;
      else return false;
    });
  } else return apps;
}

applicationRoute.get("/upcoming", (req: Request, res: Response) => {
  console.log("api/applications/upcoming");
  try {
    const weekFromNow: Date = moment(new Date()).add(7, "days").toDate();
    const returnData: ICalendarResponse[] = [];
    const data: ICalendarResponse[] = AllCalendarData;

    data.sort((alpha, beta) => {
      let alphaAppDate: Date = findLargestAppEndDate(alpha);
      let betaAppDate: Date = findLargestAppEndDate(beta);
      if (alphaAppDate < betaAppDate) return -1;
      else if (alphaAppDate > betaAppDate) return 1;
      else return 0;
    });

    data.forEach((obj) => {
      if (obj.applications) {
        let objEndDate: Date = findLargestAppEndDate(obj);
        if (objEndDate < weekFromNow || returnData.length < 4) {
          returnData.push(obj);
        }
      }
    });
    res.send(returnData);
  } catch (err) {
    res.status(500);
  }
});

export default applicationRoute;
