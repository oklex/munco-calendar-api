import { Request, Response } from "express";

export const post_new_organization = async function(req: Request, res: Response) {
	res.send("PROTOTPYE ROUTE: /api/organizations/new")
}