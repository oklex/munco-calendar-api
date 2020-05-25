import { expect } from "chai";
import "mocha";
import request from "supertest";
import app from "../../src/app";
import { ICalendarResponse } from "../../src/models/CalendarResponse";
import InitializeDatabase from "../../src/database/Firebase";

export function applicationsGetTests() {
	return describe("Tests for GET applications", () => {
		context("route /api/applications/all", () => {
			it("should not have empty applications lists", async () => {
				const res = await request(app).get("/api/applications/all");
				console.log("debug: ", res.body);
				let qualifying: boolean[] = [];
				if (res.body != {} && res.body.length > 0) {
					await Promise.all(
						res.body.map((obj: ICalendarResponse, index: any) => {
							let apps = obj.applications;
							if (!apps || apps.length == 0) qualifying.push(true);
						})
					);
					if (qualifying.length > 0) expect(true).to.be.false;
					else expect(false).to.be.false;
				} else {
					expect(false).to.be.false;
				}
			});
			it("should not have closed applications", async () => {
				await request(app)
					.get("/api/applications/all")
					.then(async (res) => {
						console.log("debug: ", res.body);
						let qualifying: boolean[] = [];
						let currentDate: Date = new Date();

						if (res.body != {} && res.body.length > 0) {
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
						} else {
							return false
						}
					})
					.then((ret) => {
						expect(ret).to.be.false;
					});
				// expect(false).to.be.false;
			});
		});
	});
}
