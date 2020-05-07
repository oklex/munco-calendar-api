import "mocha";
// const expect = require("chai").expect;
import request from "supertest";
import app from "../../src/app";

export function organizationPostTests() {
	return describe("Tests for POST and PATCH for organizations", () => {
		context("input checker tests POST /api/applications/new", () => {
			it("should not work if data is missing", (done) => {
				request(app).post("/api/organizations/new").expect(400, done);
                // expect(response.statusCode).tobe(500)
            });
			it("should not work if data is missing", (done) => {
				request(app)
					.post("/api/organizations/new")
					.send({
						short_name: "nmun",
						// full_name: "new model un",
						// organization_type: "nonProfit",
						// running_since: "april 03 2020",
						// website: "something.organ"
					})
					.expect(400, done);
			});
		});
	});
}
