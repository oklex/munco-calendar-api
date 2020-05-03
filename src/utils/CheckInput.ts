//@ts-ignore
import whois from "whois-promise";

export let checkName = (name: string): boolean => {
	if (name) {
		let regex: RegExp = new RegExp(/^[a-zA-Z\s]*$/);
		// console.log("checkNames read string: ", name.match(regex).toString());
		if (name.match(regex) && name == name.match(regex).toString()) return true;
		else return false;
	} else {
		return false;
	}
};

export let checkWebsite = async (website: string): Promise<boolean> => {
	// check if it's unique (not on Firebase)
	// check whois
	if (website) {
        return true
		// let whoisResult: boolean = false;
        // let result: any = await whois.json(website)
		// if (result) whoisResult = true;
		// else whoisResult = false;
		// console.log("during promise: ", whoisResult);
		// console.log("whois.lookup returns: ", website, result);
		// return whoisResult;
	} else return false;
};
