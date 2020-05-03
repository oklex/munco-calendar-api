export let getDomain = (website: string) => {
	let words: string[] = website.split(".");
	if (words.length < 2) throw Error("domain is invalid");
	let domain: string = words[words.length - 2] + "." + words[words.length - 1];
	console.log(domain);
	return domain;
};

export let getDomainKey = (website: string) => {
    let words: string[] = website.split(".");
	if (words.length < 2) throw Error("domain is invalid");
	let domain: string = words[words.length - 2] + "_" + words[words.length - 1];
	console.log(domain);
	return domain;
}