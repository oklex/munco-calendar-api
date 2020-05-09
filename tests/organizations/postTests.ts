import "mocha";
// const expect = require("chai").expect;
import request from "supertest";
import app from "../../src/app";
import { Request, Response, NextFunction } from "express";
import { checkOrgValidInput } from "../../src/middleware/checkNewOrgInputs";

export function organizationPostTests() {
	return describe("Tests for POST and PATCH for organizations", () => {
		context("input checker tests POST middleware: checkOrgValidInput", () => {
			it("should not work if data is missing", (done) => {
				app.post("/test/:website_key", checkOrgValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				})
				request(app).post("/test").expect(400, done);
                // expect(response.statusCode).tobe(500)
            });
			it("should not work if data is missing", (done) => {
				app.post("/test/:website_key", checkOrgValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				})
				request(app)
					.post("/test")
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
