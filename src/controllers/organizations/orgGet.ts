import { Request, Response } from "express";
import { dbDelete, dbGetOnce } from "../../database/Firebase";
import { calendarDataPath } from "../../database/constants";
import { IOrganization } from "../../models/CalendarResponse";
import { MapOrgSnapshot } from "../../utils/MapSnapShot";

export const organizations_get_all = async function (
	req: Request,
	res: Response
) {
	try {
		let allOrgs: IOrganization[] = []
		let data: any = await dbGetOnce(calendarDataPath)
		let keys:string[] = Object.keys(data.val())
		keys.forEach((key:string) => {
			allOrgs.push(MapOrgSnapshot(data.val()[key]))
		})
		res.send(allOrgs)
	} catch (err) {
        res.status(500).send('GET failed ' + err)
    }
};

export const organizations_get_byID = async function (
	req: Request,
	res: Response
) {
	try {
        // map the results onto an obj of Organization request
        // if url params for include have "all", "applications", or "events" then include them

        res.send('prototype /organizations/:id')
	} catch (err) {
        res.status(500).send('GET failed')
    }
};
