import { Router, Request, Response, NextFunction } from "express";
import { checkAuthToken } from "../middleware/checkAuthToken";
import { events_create_new, events_patch, events_delete } from "../controllers/events/eventsMod";
import { checkEventIDInput } from "../middleware/checkPatchInput";
import { checkNewEventValidInput } from "../middleware/checkNewEventInput";
const eventsRoute = Router();

eventsRoute.get('/all', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/all")
})

eventsRoute.get('/upcoming', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/upcoming")
})

eventsRoute.post('/new', checkAuthToken, checkNewEventValidInput, events_create_new)

eventsRoute.patch('/:eventId', checkAuthToken, checkEventIDInput, events_patch)

eventsRoute.delete('/:eventId', checkAuthToken, checkEventIDInput, events_delete)

export default eventsRoute