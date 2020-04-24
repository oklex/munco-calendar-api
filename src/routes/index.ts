import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../utils/FindLargestAppEndDate";
import AllCalendarData from "../data/CalendarData";
import { ICalendarResponse, IApplicationType, IApplication } from "../models/CalendarResponse";

import moment from "moment";

const api = Router();

api.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

api.get("/all", (req: Request, res: Response) => {
  try {
    const data: ICalendarResponse[] = AllCalendarData;
    data.sort((alpha, beta) => {
      let alphaAppDate: Date = findLargestAppEndDate(alpha);
      let betaAppDate: Date = findLargestAppEndDate(beta);
      if (alphaAppDate < betaAppDate) return -1;
      else if (alphaAppDate > betaAppDate) return 1;
      else return 0;
    });
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

api.get("/upcoming", (req: Request, res: Response) => {
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

export default api;