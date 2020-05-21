import { Request, Response, NextFunction } from "express";
import {
    checkWebsite,
    checkName,
    checkOrganizationType,
    checkValidDate,
    checkApplicationType,
    CheckDateOrder,
} from "../utils/CheckInput";
import { checkPathInUse } from "../database/Firebase";

export const checkNewEventValidInput = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("checking input at \"checkNewAppValidInput\": ", req.body)
    if (
        checkName(req.body.venue_name) &&
        checkName(req.body.venue_city) &&
        checkValidDate(req.body.start_date) &&
        checkValidDate(req.body.end_date) &&
        CheckDateOrder(req.body.start_date, req.body.end_date)
    ) {
        if (req.body.tags) {
            let tags: string[] = req.body.tags.split(',')
            let validTags:boolean[] = await Promise.all(tags.map((tag) => {
                return checkName(tag)
            }))
            if (validTags.reduce((total, current) => {
                return total && current
            })) {
                console.log("all tags are valid")
                next()
            } else {
                res.send(400).send("one or more tags are invalid")
            }
        }
        console.log("all event input is valid")
        next();
    } else {
        console.log("invalid input fields")
        res.status(400).send("invalid input fields");
    }
};


// venue_name?: string;
// venue_city?: string;
// start_date?: Date;
// end_date?: Date | null;
// dates_tentative?: boolean;
// tags?: string[];