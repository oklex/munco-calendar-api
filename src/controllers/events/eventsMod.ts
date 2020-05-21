import { Request, Response } from "express";

export const events_create_new = async function (
	req: Request,
	res: Response
) { 
	res.send("PROTOTPYE ROUTE: /api/events/new")
}

export const events_patch = async function (
	req: Request,
	res: Response
) { 
	res.send("PROTOTPYE ROUTE: /api/events/:id")
}

export const events_delete = async function (
	req: Request,
	res: Response
) { 
	res.send("PROTOTPYE ROUTE: /api/events/:id")
}
