import { Request, Response } from "express";
import { IEvent } from "../../models/CalendarResponse";
import { MapBodyToEvent, MapBodyToApp, MapBodyToEventRequest } from "../../utils/MapBody";
import { dbSet, dbUpdate, dbDelete } from "../../database/Firebase";
import { getEventsPathWithKey, getSingleEventsPathWithKey } from "../../database/getPaths";
import { IEventRequest } from "../../models/CalendarRequests";

export const events_create_new = async function (
	req: Request,
	res: Response
) {
	let newEvent: IEvent = MapBodyToEvent(req.body)
	await dbSet(getEventsPathWithKey(req.body.website_key), newEvent).then(() => {
		res.send("post successful")
	}).catch((err) => {
		res.status(500).send(err);
	})
}

export const events_patch = async function (
	req: Request,
	res: Response
) {
	let eventId: string = req.params.eventId
	let patchObj: IEventRequest = await MapBodyToEventRequest(req.body)
	await dbUpdate(getSingleEventsPathWithKey(req.body.website_key, eventId), patchObj).then(() => {
		res.send("patch successful")
	}).catch((err) => {
		res.status(500).send(err);
	})
}

export const events_delete = async function (
	req: Request,
	res: Response
) {
	let eventId: string = req.params.eventId
	await dbDelete(getSingleEventsPathWithKey(req.body.website_key, eventId)).then(() => {
		res.send("delete successful")
	}).catch((err) => {
		res.status(500).send(err);
	})

}
