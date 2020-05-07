import { Router, Request, Response, NextFunction } from "express";
import { applications_create_new, applications_patch_byID, applications_delete_byID } from "../controllers/applications/appsMod";
import { checkAppValidInput } from "../middleware/checkNewAppInputs";
import {
	applications_get_all,
	applications_get_upcoming,
} from "../controllers/applications/appsGet";
import { checkAppPatchInput } from "../middleware/checkPatchAppInput";

const applicationRoute = Router();

applicationRoute.get("/all", applications_get_all);

applicationRoute.get("/upcoming", applications_get_upcoming);

applicationRoute.post("/new", checkAppValidInput, applications_create_new);
/* 
req.body = {
  name: string;
  type: IApplicationType;
  start_date: Date;
  end_date: Date;
  dates_tentative: boolean;
  applicationLink: string;
}
*/

applicationRoute.patch("/:id", checkAppPatchInput, applications_patch_byID);
/* 
req.body = {
  website_key: string,

  name?: string;
  type?: IApplicationType;
  start_date?: Date;
  end_date?: Date;
  dates_tentative?: boolean;
  applicationLink?: string;
}
*/

applicationRoute.delete("/:id", applications_delete_byID);
/* 
req.body = {
  website_key: string
}
*/

export default applicationRoute;
