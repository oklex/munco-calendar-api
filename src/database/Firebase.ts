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
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) return true
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
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) return true
	try {
		await firebase.database().ref(route).set(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbUpdate = async (route: string, obj: any) => {
	console.log('Firebase update: ', route, obj)
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) return true
	try {
		await firebase.database().ref(route).update(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbPush = async (route: string, obj: any) => {
	console.log('Firebase push: ', route, obj)
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) return true
	try {
		await firebase.database().ref(route).push(obj);
	} catch (err) {
		console.log(err);
		throw Error(err);
	}
};

export let dbDelete = async (route: string) => {
	console.log('Firebase delete: ', route)
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) return true
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
	// if (process.env.GITHUB_ACTIONS || process.env.TESTING) check mock data
	return await firebase
		.database()
		.ref(path)
		.once("value")
		.then(async (snapshot: any) => {
			if (snapshot.hasChild(hasKey)) return true
			else {
				console.log("path: " + path + "/" + hasKey + " is empty")
				return false
			};
		})
};

export default FirebaseInitialize;
