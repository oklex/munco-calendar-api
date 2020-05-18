export let getDomain = (website: string) => {
	let words: string[] = website.split(".");
	if (words.length < 2) throw Error("domain is invalid");
	let domain: string = words[words.length - 2] + "." + words[words.length - 1];
	return domain;
};

export let getDomainKey = (link: string) => {
	let split: string[] = link.split("//")
	if (split.length > 2) {
		throw Error("website is invalid")
	} else {
		let website: string = split[1]
		website.replace("/", "")
		let words: string[] = website.split(".");
		if (words.length < 2) throw Error("domain is invalid: " + website + " - isn't - " + words[0]);
		let domain: string = words[words.length - 2] + "_" + words[words.length - 1];
		return domain;
	}
}