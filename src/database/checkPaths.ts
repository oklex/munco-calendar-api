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
			if (snapshot.hasChild(hasKey)) return true
			else {
				console.log("can't resolve path", path, hasKey)
				return false
			};
		})
};