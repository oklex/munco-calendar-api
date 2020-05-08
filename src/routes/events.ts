import { Router, Request, Response, NextFunction } from "express";
const eventsRoute = Router();

eventsRoute.post('/all', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/all")
})

eventsRoute.post('/upcoming', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/upcoming")
})

eventsRoute.post('/new', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/new")
})

eventsRoute.patch('/:id', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/:id")
})

eventsRoute.delete('/:id', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/events/:id")
})

export default eventsRoute