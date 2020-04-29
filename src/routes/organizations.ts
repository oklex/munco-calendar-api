import { Router, Request, Response, NextFunction } from "express";
const organizationRoute = Router();

organizationRoute.post('/new', (req: Request, res: Response) => {
	res.send("PROTOTPYE ROUTE: /api/organizations/new")
})

export default organizationRoute