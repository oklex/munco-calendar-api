import { Router, Request, Response, NextFunction } from "express";
import { applications_create_new } from "../controllers/applications/appsMod";
import { checkAppValidInput } from "../middleware/checkAppInputs";
import {
	applications_get_all,
	applications_get_upcoming,
} from "../controllers/applications/appsGet";

const applicationRoute = Router();

applicationRoute.get("/all", applications_get_all);

applicationRoute.get("/upcoming", applications_get_upcoming);

applicationRoute.post("/new", checkAppValidInput, applications_create_new);

applicationRoute.patch("/:id", (req: Request, res: Response) => {
	res.send("Prototype route: patch by Firebase obj key");
});

applicationRoute.delete("/:id", (req: Request, res: Response) => {
	res.send("Prototype route: delete by Firebase obj key");
});

export default applicationRoute;
