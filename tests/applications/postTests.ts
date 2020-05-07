import "mocha";
import { expect } from "chai";
import request from "supertest";
import app from "../../src/app";

export function applicationsPostTests() {
	return describe("Tests for POST and PATCH for applications", () => {
		context("input checker tests POST /api/applications/new", () => {
			it("should not work if data is missing", (done) => {
				request(app).post("/api/applications/new").expect(400, done);
			});
			it("should not work if name has special char", (done) => {
				request(app)
					.post("/api/applications/new")
					.send({
						name: "app name !",
						start_date: "jan 1 2020",
						end_date: "jan 5 2020",
						type: "staff",
						applicationLink: "richmun.ca/apply",
						dates_tentative: false,
					})
					.expect(400, done);
			});
			it("should not work if any date is wrong", (done) => {
				request(app)
					.post("/api/applications/new")
					.send({
						name: "app name",
						start_date: "not a date",
						end_date: "jan 5 2020",
						type: "staff",
						applicationLink: "richmun.ca/apply",
						dates_tentative: false,
					})
					.expect(400, done);
			});
			it("should not work if type is wrong", (done) => {
				request(app)
					.post("/api/applications/new")
					.send({
						name: "app name",
						start_date: "jan 1 2020",
						end_date: "jan 5 2020",
						type: "fake type",
						applicationLink: "richmun.ca/apply",
						dates_tentative: false,
					})
					.expect(400, done);
			});

			it("should not work if website is wrong", (done) => {
				request(app)
					.post("/api/applications/new")
					.send({
						name: "app name",
						start_date: "jan 1 2020",
						end_date: "jan 5 2020",
						type: "staff",
						applicationLink: "not a website",
						dates_tentative: false,
					})
					.expect(400, done);
			});

			// it("should work if all data is valid",  (done) => {
			// 	request(app)
			// 		.post("/api/applications/new")
			// 		.send({
			// 			name: "app name",
			// 			start_date: "jan 1 2020",
			// 			end_date: "jan 5 2020",
			// 			type: "staff",
			// 			applicationLink: "richmun.ca/apply",
			// 			dates_tentative: false,
			// 			organizationSite: "richmun.ca",
			// 		})
			// 		.expect(200, done);
			// });
		});

		// context("input checker tests PATCH /api/applications/:id", () => {
		// 	it("should not work if ID doesn't exist on organization's applications",  (done) => {
		// 		request(app).patch("/api/applications/-M6hbSNUk5_FgPfjQEOx").send({
        //             website_key: "munco.ca",
        //             type: "Secretariat"
        //         }).expect(500, done);
        //     });
		// 	it("should not work if website key doesn't exist",  (done) => {
		// 		request(app).patch("/api/applications/-M6hbSNUk5_FgPfjQEOx").send({
        //             type: "Secretariat"
        //         }).expect(400, done);
		// 	});
		// });
	});
}
