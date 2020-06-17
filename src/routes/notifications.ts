import { Router, Request, Response, NextFunction } from "express";

const notificationsRoute = Router();

notificationsRoute.post('/register', (req: Request, res: Response) => {
    // confirm that it's a FCM token
    
})

export default notificationsRoute