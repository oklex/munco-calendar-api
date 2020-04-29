import { Router, Request, Response, NextFunction } from "express";
const eventsRoute = Router();

eventsRoute.post('/new', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/new")
})

export default eventsRoute