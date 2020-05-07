import { expect, assert } from "chai";
import "mocha";
import request from "supertest";
import app from "../src/app";
import {
	ICalendarResponse,
} from "../src/models/CalendarResponse";

export function applicationsGetTests() {
	return describe("applicationsGetTest", () => {
		context("route /api/applications/all", () => {
			it("should not have empty applications lists", async () => {
				const res = await request(app).get("/api/applications/all");
				let qualifying: boolean[] = [];
				await Promise.all(
					res.body.map((obj: ICalendarResponse, index: any) => {
						let apps = obj.applications;
						if (!apps || apps.length == 0) qualifying.push(true);
					})
				);
				if (qualifying.length > 0) expect(true).to.be.false;
				else expect(false).to.be.false;
			});
			it("should not have closed applications", async () => {
				await request(app)
					.get("/api/applications/all")
					.then(async (res) => {
						let qualifying: boolean[] = [];
						let currentDate: Date = new Date();
						await Promise.all(
							res.body.map(async (obj: ICalendarResponse, index: any) => {
								let apps = obj.applications;
								let qualifyingDate: boolean[] = [];
								await Promise.all(
									apps.map((app) => {
										if (app.end_date < currentDate) qualifyingDate.push(true);
									})
								);
								if (qualifyingDate.length > 0) qualifying.push(true);
							})
						);
						if (qualifying.length > 0) return true;
						else return false;
					})
					.then((ret) => {
						expect(ret).to.be.false;
					});
				// expect(false).to.be.false;
			});
		});
	});
}
