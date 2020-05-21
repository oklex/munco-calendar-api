import { Request, Response, NextFunction } from "express";
import {
    checkWebsite,
    checkName,
    checkOrganizationType,
    checkValidDate,
    checkApplicationType,
} from "../utils/CheckInput";
import { checkPathInUse } from "../database/checkPaths";

export const checkNewEventValidInput = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("checking input at \"checkNewAppValidInput\": ", req.body)
    if (
        checkName(req.body.name)
    ) {
        next();
    } else {
        console.log("invalid input fields")
        res.status(400).send("invalid input fields");
    }
};
