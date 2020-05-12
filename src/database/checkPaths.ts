import firebase from "firebase";

export let checkPathInUse = async (
	path: string,
	hasKey: string
): Promise<boolean> => {
	// console.log("is path null? ", path, hasKey);
	return await firebase
		.database()
		.ref(path)
		.once("value")
		.then(async (snapshot: any) => {
			return snapshot.hasChild(hasKey);
		});
};