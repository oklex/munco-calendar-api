import { Response, Request, NextFunction } from "express";


let sortResponses = (res: Response, req: Request, next: NextFunction) => {
    try {

    } catch (err) {
        res.status(500).send(err)
    }
}