import { Request, Response, NextFunction, response } from "express";

export const checkAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		if (
			process.env.AUTH_TOKEN &&
			req.headers["authorization"] &&
			process.env.AUTH_TOKEN == req.headers["authorization"]
		) {
			next();
		} else {
			res.status(401).send("not authorized");
		}
	} catch (err) {
		res.status(500).send("couldn't verify authorization");
	}
};
