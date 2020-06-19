import firebase from "firebase";
var admin = require("firebase-admin");
import configService from "./ConfigService";
import { getfcmTokenPath } from "./getPaths";
import FirebaseSendMessage from "./AdminMessaging";
import { IMPayload, IMOptions } from "../models/Messaging";

let InitializeDatabase = () => {
	let config: any = configService();
	try {
		firebase.initializeApp(config);
		if (process.env.NODE_ENV === 'PRODUCTION') {
			InitializeFirebaseUser();
			InitializeFirebaseUser(); initializeFirebaseAdmin()
		}
		var connectedRef = firebase.database().ref(".info/connected");
		connectedRef.on("value", function (snap: any) {
			if (snap.val() === true) {
				console.log("connected");
			} else {
				console.log("not connected");
			}
		});
	} catch (err) {
		console.log("Firebase initialization failed");
		throw err;
	}
	return config;
};

let initializeFirebaseAdmin = async () => {
	try {
		var serviceAccount: any = {
			type: process.env.FIREBASE_ADMIN_TYPE,
			project_id: process.env.FIREBASE_ADMIN_PROJECT_ID,
			private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
			private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
			client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
			client_id: process.env.FIREBASE_ADMIN_CLIENT_ID,
			auth_uri: process.env.FIREBASE_ADMIN_AUTH_URI,
			token_uri: process.env.FIREBASE_ADMIN_TOKEN_URI,
			auth_provider_x509_cert_url: process.env.FIREBASE_ADMIN_AUTH_PROVIDER_URL,
			client_x509_cert_url: process.env.FIREBASE_ADMIN_CLIENT_URL
		};
		// console.log("serviceAccount: ", serviceAccount)
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL: process.env.FIREBASE_DATABASE_URL
		})
	} catch (err) {
		console.log("couldn't initialized Firebase Admin", err)
	} finally {
		console.log("initialized admin sdk")
	}
}

let InitializeFirebaseUser = () => {
	firebase
		.auth()
		.signInWithEmailAndPassword(
			process.env.ADMIN_USERNAME,
			process.env.ADMIN_PASSWORD
		)
		.then(() => {
			console.log("authenticated ", firebase.auth().currentUser.uid);
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					console.log("App is signed in");
				} else {
					console.log("App is not signed in");
				}
			});
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export let dbGetOnce = async (route: string) => {
	console.log("Firebase get: ", route);
	try {
		return await firebase
			.database()
			.ref(route)
			.once("value", (snapshot: any) => {
				return snapshot;
			});
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbSet = async (route: string, obj: any) => {
	console.log("Firebase set: ", route, obj);
	try {
		await firebase.database().ref(route).set(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbUpdate = async (route: string, obj: any) => {
	console.log("Firebase update: ", route, obj);
	try {
		await firebase.database().ref(route).update(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbPush = async (route: string, obj: any) => {
	console.log("Firebase push: ", route, obj);
	try {
		await firebase.database().ref(route).push(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbDelete = async (route: string) => {
	console.log("Firebase delete: ", route);
	try {
		await firebase.database().ref(route).remove();
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let checkPathInUse = async (
	path: string,
	hasKey: string
): Promise<boolean> => {
	console.log("is path null? ", path, hasKey);
	return await firebase
		.database()
		.ref(path)
		.once("value")
		.then(async (snapshot: any) => {
			if (snapshot.hasChild(hasKey)) return true;
			else {
				console.log("path: " + path + "/" + hasKey + " is empty");
				return false;
			}
		});
};

export let saveFCMToken = async (fcmToken: string): Promise<boolean> => {
	if (fcmToken === "") throw Error('empty token')
	let returnVal: boolean = await firebase.database().ref(getfcmTokenPath()).child(fcmToken).set(
		true
	).then(async () => {
		let payload: IMPayload = {
			notification: {},
			data: {
				title: "Signed up for notifications",
				body: "You're good to go!"
			}
		}
		let options: IMOptions = {
			ttl: 1000,
			collapseKey: "welcome-notification"
		}
		FirebaseSendMessage(fcmToken, payload, options)
	}).then(() => {
		return true
	}).catch((err) => {
		console.log(err);
		return false
	})
	return returnVal
}

export let checkFCMToken = async (fcmToken: string): Promise<any> => {
	if (fcmToken === "") throw Error('empty token')
	console.log('checkFCMToken() ')
	let returnVal: any = await firebase.database().ref(getfcmTokenPath(fcmToken)).once('value').then((snapshot: any) => {
		if (snapshot.val()) {
			return snapshot.val()
		} else {
			return false
		}
	})
	return returnVal
}

export let deleteFCMToken = async (fcmToken: string): Promise<any> => {
	if (fcmToken === "") throw Error('empty token')
	console.log('deleteFCMToken() ')
	firebase.database().ref(getfcmTokenPath(fcmToken)).remove()
	return true
}

export default InitializeDatabase;