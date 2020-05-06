import { Router, Request, Response, NextFunction } from "express";
import { post_new_organization } from "../controllers/organizations/orgMod";
import { checkOrgValidInput } from "../middleware/checkOrgInputs";

const organizationRoute = Router();

organizationRoute.post('/new', checkOrgValidInput, post_new_organization)

organizationRoute.patch('/:id', (req:Request, res:Response) => {
    res.send("Prototype route: patch by Firebase obj key")
})

organizationRoute.delete('/:id', (req:Request, res:Response) => {
    res.send("Prototype route: patch by Firebase obj key")
})

export default organizationRoute