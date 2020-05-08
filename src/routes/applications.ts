import { Router, Request, Response, NextFunction } from "express";
import { applications_create_new, applications_patch_byID, applications_delete_byID } from "../controllers/applications/appsMod";
import { checkAppValidInput } from "../middleware/checkAppInputs";
import {
	applications_get_all,
	applications_get_upcoming,
} from "../controllers/applications/appsGet";
import { checkAppIDInput } from "../middleware/checkPatchAppInput";

const applicationRoute = Router();

applicationRoute.get("/all", applications_get_all);

applicationRoute.get("/upcoming", applications_get_upcoming);

applicationRoute.post("/new", checkAppValidInput, applications_create_new);

applicationRoute.patch("/:appId", checkAppIDInput, applications_patch_byID);

applicationRoute.delete("/:appId", checkAppIDInput, applications_delete_byID);

export default applicationRoute;
