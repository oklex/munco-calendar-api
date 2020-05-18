import firebase from "firebase";

let FirebaseInitialize = () => {
	let config: any = {
		apiKey: process.env.FIREBASE_API_KEY,
		authDomain: process.env.FIREBASE_AUTH_DOMAIN,
		databaseURL: process.env.FIREBASE_DATABASE_URL,
		projectId: process.env.FIREBASE_PROJECT_ID,
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.FIREBASE_SENDER_ID,
		appId: process.env.FIREBASE_APP_ID,
	};
	try {
		console.log("initializing Firebase");
		firebase.initializeApp(config);
	} catch (err) {
		throw err;
	}
	return config;
};

export let dbGetOnce = async (route: string) => {
	console.log('Firebase get: ', route)
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
	console.log('Firebase set: ', route, obj)
	try {
		await firebase.database().ref(route).set(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbUpdate = async (route: string, obj: any) => {
	console.log('Firebase update: ', route, obj)
	try {
		await firebase.database().ref(route).update(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbPush = async (route: string, obj: any) => {
	console.log('Firebase push: ', route, obj)
	try {
		await firebase.database().ref(route).push(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbDelete = async (route: string) => {
	console.log('Firebase delete: ', route)
	try {
		await firebase.database().ref(route).remove();
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export default FirebaseInitialize;
