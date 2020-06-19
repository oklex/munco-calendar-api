var admin = require("firebase-admin");
import { IMPayload, IMOptions } from '../models/Messaging'

export const FirebaseSendMessage = (tokens: string | string[], payload: IMPayload, options?: IMOptions) => {
    let defaultOptions: IMOptions = {
        ttl: 3600 
    } // 1 hour by default
    console.log("\n sending message(s)...", tokens, payload, '\n')
    admin.messaging().sendToDevice(tokens, payload, options? options : defaultOptions)
        .then((response: any) => {
            console.log("Successfully sent message:", response);
        })
        .catch((error: Error) => {
            console.log("Error sending message:", error);
        });
}

export default FirebaseSendMessage