import { Request, Response } from "express";

export const organizations_get_all = async function (
	req: Request,
	res: Response
) {
	try {
		// map the results onto an array of Organization request
		// get all the data from firebase; map for each object in the array -> onto response type
        res.send('prototype /organizations/ALL')
	} catch (err) {
        res.status(500).send('GET failed')
    }
};

export const organizations_get_byID = async function (
	req: Request,
	res: Response
) {
	try {
        // map the results onto an obj of Organization request
        // if url params for include have "all", "applications", or "events" then include them

        res.send('prototype /organizations/:id')
	} catch (err) {
        res.status(500).send('GET failed')
    }
};
