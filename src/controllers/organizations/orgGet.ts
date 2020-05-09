import { Router, Request, Response, NextFunction } from "express";
import findLargestAppEndDate from "../../utils/FindLargestAppEndDate";
import {
	ICalendarResponse,
	IApplicationType,
	IApplication,
} from "../../models/CalendarResponse";
import moment from "moment";
import getCalendarData from "../../utils/GetData";
import { dbPush } from "../../database/Firebase";
import { getApplicationsPath } from "../../database/getPaths";

export const organizations_get_all = async function (
	req: Request,
	res: Response
) {
	try {
        // map the results onto an array of Organization request
        res.send('prototype /organizations/ALL')
	} catch (err) {
        res.status(500).send('GET failed')
    }
};

export const organizations_get_byID = async function (
	req: Request,
	res: Response
) {
	try {
        // map the results onto an obj of Organization request
        // if url params for include have "all", "applications", or "events" then include them
        // 

        res.send('prototype /organizations/:id')
	} catch (err) {
        res.status(500).send('GET failed')
    }
};
