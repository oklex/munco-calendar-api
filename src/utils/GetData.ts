import AllCalendarData from "../data/CalendarData";
import { MockCalendarData } from "../data/MockData";

const getCalendarData = () => {
	if (process.env.NODE_ENV == "development") {
		console.log("IN DEVELOPMENT: using mock data");
		return MockCalendarData;
	} else if (process.env.NODE_ENV == "production") {
		return AllCalendarData;
	} else {
		throw Error("NODE_ENV not specified");
	}
};

export default getCalendarData;
