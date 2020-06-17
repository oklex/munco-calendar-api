import { Router, Request, Response } from "express";
import {findLargestAppEndDate} from "../utils/FindLargestAppEndDate";
import {
  ICalendarResponse
} from "../models/CalendarResponse";
import applicationRoute from "./applications";
import organizationRoute from "./organizations"
import eventsRoute from "./events";
import notificationsRoute from "./notifications";

const api = Router();

api.get("/", (req: Request, res: Response) => {
  res.send("welcome to the MUNCO calendar API");
});

api.use('/applications', applicationRoute)
api.use('/organizations', organizationRoute)
api.use('/events', eventsRoute)
api.use('/notifications', notificationsRoute)

export default api;
