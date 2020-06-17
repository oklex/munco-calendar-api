import { Router, Request, Response, NextFunction } from "express";
import { saveFCMToken, checkFCMToken } from "../database/Firebase";

const notificationsRoute = Router();

notificationsRoute.post('/register', async (req: Request, res: Response) => {
    try {
        if (req.body.fcmToken) {
            let success: boolean = await saveFCMToken(req.body.fcmToken)
            if (success) {
                console.log('fcm token registration success')
                res.send("success")
            } else {
                throw new Error("couldn't connect to Database")
            }
        } else {
            throw new Error("no fcm token in body")
        }
    } catch (err) {
        console.log("fcm token registration failed: ", err)
        res.status(400).send(err.message)
    }
})

notificationsRoute.get('/check', async (req: Request, res: Response) => {
    try {
        if (req.body.fcmToken) {
            let settings: any = await checkFCMToken(req.body.fcmToken)
                console.log("device settings", settings)
            if (settings) {
                res.send({ "settings": settings })
            } else {
                throw new Error("no device found")
            }
        } else {
            throw new Error("no fcm token in body")
        }
    } catch (err) {
        console.log("check for fcm token failed", err)
        res.status(400).send(err.message)
    }
})

export default notificationsRoute