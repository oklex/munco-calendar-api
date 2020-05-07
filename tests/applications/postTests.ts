import "mocha";
import request from "supertest";
import app from "../../src/app";

export function applicationsPostTests() {
	return describe("Tests for POST and PATCH for applications", () => {
		context("input checker tests POST /api/applications/new", () => {
			it("should not work if data is missing", async () => {
				request(app).post("/api/applications/new").expect(500);
			});
			it("should not work if name has special char", async () => {
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
					.expect(500);
			});
			it("should not work if any date is wrong", async () => {
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
					.expect(500);
			});
			it("should not work if type is wrong", async () => {
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
					.expect(500);
			});

			it("should not work if website is wrong", async () => {
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
					.expect(500);
			});

			it("should work if all data is valid", async () => {
				request(app)
					.post("/api/applications/new")
					.send({
						name: "app name",
						start_date: "jan 1 2020",
						end_date: "jan 5 2020",
						type: "staff",
						applicationLink: "richmun.ca/apply",
						dates_tentative: false,
						organizationSite: "richmun.ca",
					})
					.expect(200);
			});
		});

		context("input checker tests PATCH /api/applications/:id", () => {
			it("should not work if ID doesn't exist on organization's applications", async () => {
				request(app).patch("/api/applications/-M6hbSNUk5_FgPfjQEOx").send({
                    website_key: "munco.ca",
                    type: "Secretariat"
                }).expect(500);
            });
			it("should not work if website key doesn't exist", async () => {
				request(app).patch("/api/applications/-M6hbSNUk5_FgPfjQEOx").send({
                    type: "Secretariat"
                }).expect(500);
			});
		});
	});
}
