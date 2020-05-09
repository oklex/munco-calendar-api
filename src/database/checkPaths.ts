import firebase from "firebase";

export let checkPathNotNull = async (
	path: string,
	hasKey: string
): Promise<boolean> => {
	if (process.env.NODE_ENV !== "production") return true
	let returnVal: boolean = await firebase
		.database()
		.ref(path)
		.once("value")
		.then(async (snapshot: any) => {
			return snapshot.hasChild(hasKey);
		});
	return returnVal;
};