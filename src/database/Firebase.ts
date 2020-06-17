import firebase from "firebase";
import configService from "./ConfigService";
import { getfcmTokenPath } from "./getPaths";

let InitializeDatabase = () => {
	let config: any = configService();
	try {
		firebase.initializeApp(config);
		InitializeFirebaseUser();
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

export let InitializeFirebaseUser = async () => {
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
	let returnVal: boolean = await firebase.database().ref(getfcmTokenPath()).set({
		fcmToken: true
	}).then(() => { return true }).catch((err) => {
		console.log(err);
		return false
	})
	return returnVal
}

export let checkFCMToken = async (fcmToken: string): Promise<any> => {
	console.log('checkFCMToken() ')
	let returnVal: any = await firebase.database().ref(getfcmTokenPath(fcmToken)).once('value').then((snapshot: any) => {
		console.log('checkFCMTOken() . then ()', snapshot.val())
		if (snapshot.val()) {
			return snapshot.val()
		} else {
			return false
		}
	})
	return returnVal
}

export default InitializeDatabase;
