import firebase from "firebase";

export let checkPathNotNull = async (
	path: string,
	hasKey: string
): Promise<boolean> => {
	console.log("check path: ", path);
	let returnVal: boolean = await firebase
		.database()
		.ref(path)
		.once("value")
		.then(async (snapshot: any) => {
			console.log("snapshot: ", snapshot);
			return snapshot.hasChild(hasKey);
		});
	return returnVal;
};