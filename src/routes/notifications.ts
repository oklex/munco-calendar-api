import { Router, Request, Response, NextFunction } from "express";
import { saveFCMToken, checkFCMToken, deleteFCMToken } from "../database/Firebase";

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

notificationsRoute.post('/check', async (req: Request, res: Response) => {
    try {
        if (req.body.fcmToken) {
            let settings: any = await checkFCMToken(req.body.fcmToken)
            console.log("device settings", settings)
            if (settings) {
                res.send({ "settings": settings })
            } else {
                res.send("no device found")
            }
        } else {
            throw new Error("no fcm token in body")
        }
    } catch (err) {
        console.log("check for fcm token failed", err)
        res.status(400).send(err.message)
    }
})

notificationsRoute.patch('/unregister', async (req: Request, res: Response) => {
    try {
        if (req.body.fcmToken) {
            await deleteFCMToken(req.body.fcmToken).then(() => {
                console.log('delete success')
                res.send("delete success")
            })
        }else {
            throw new Error("no fcm token in body")
        }
    } catch (err) {
        console.log("failed to delete token", err)
        res.status(400).send(err.message)
    }
})

export default notificationsRoute