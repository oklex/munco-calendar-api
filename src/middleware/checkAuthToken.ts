import { Request, Response, NextFunction, response } from "express";

export const checkAuthToken = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		if (
			process.env.NODE_ENV !== "production"
		) {
			next();
		} else if (
			process.env.AUTH_TOKEN &&
			req.headers["authorization"] &&
			process.env.AUTH_TOKEN == req.headers["authorization"]
		) {
			next();
		} else {
			console.log('invalid authorization token')
			res.status(401).send("request not authorized");
		}
	} catch (err) {
		console.log('invalid authorization token')
		res.status(500).send("couldn't verify request authorization code");
	}
};
