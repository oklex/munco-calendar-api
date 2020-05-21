import { Router, Request, Response, NextFunction } from "express";
import { checkAuthToken } from "../middleware/checkAuthToken";
const eventsRoute = Router();

eventsRoute.get('/all', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/all")
})

eventsRoute.get('/upcoming', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/upcoming")
})

eventsRoute.post('/new', checkAuthToken, (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/new")
})

eventsRoute.patch('/:id', checkAuthToken, (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/:id")
})

eventsRoute.delete('/:id', checkAuthToken, (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/:id")
})

export default eventsRoute