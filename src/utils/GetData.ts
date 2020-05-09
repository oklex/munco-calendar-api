import AllCalendarData from "../data/CalendarData";
import { MockCalendarData } from "../data/MockData";

const getCalendarData = () => {
	if (process.env.NODE_ENV == "development" && process.env.AUTH_TOKEN != null) {
		// console.log("IN DEVELOPMENT: using mock data");
		return MockCalendarData;
	} else if (process.env.NODE_ENV == "production"  && process.env.AUTH_TOKEN != null) {
		// console.log("IN PRODUCTION: using real data");
		return AllCalendarData;
	} else if (process.env.GITHUB_ACTIONS == "true") {
		// console.log("IN TESTS: using real data");
		return AllCalendarData;
	} else {
		throw Error("ENV not specified; check NODE_ENV or AUTH_TOKEN");
	}
};

export default getCalendarData;
