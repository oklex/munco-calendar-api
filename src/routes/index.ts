import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../utils/FindLargestAppEndDate";
import AllCalendarData from "../data/CalendarData";
import {
  ICalendarResponse,
  IApplicationType,
  IApplication,
} from "../models/CalendarResponse";
import applicationRoute from "./applications";
import getCalendarData from "../utils/GetData";

const api = Router();

api.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

api.use('/applications', applicationRoute)

api.get("/all", (req: Request, res: Response) => {
  try {
    const data: ICalendarResponse[] = getCalendarData();
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


export default api;
