import firebase from "firebase";
import configService from "./ConfigService";

let FirebaseInitialize = async () => {
	let config: any = configService();
	try {
		console.log("initializing Firebase");
		firebase.initializeApp(config);
		var connectedRef = firebase.database().ref(".info/connected");
		connectedRef.on("value", function (snap) {
			if (snap.val() === true) {
				console.log("connected");
			} else {
				console.log("not connected");
			}
		});
	} catch (err) {
		throw err;
	}
	return config;
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

export default FirebaseInitialize;
