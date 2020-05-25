import "mocha";
import { expect } from "chai";
import request from "supertest";
import app from "../../src/app";
import { checkAppValidInput } from "../../src/middleware/checkAppInputs";
import { Request, Response, NextFunction } from "express";
import { checkAppIDInput } from "../../src/middleware/checkPatchInput";
import InitializeDatabase from "../../src/database/Firebase";

export function applicationsPostTests() {
	return describe("Tests for POST and PATCH for applications", () => {
		context("input checker tests POST middleware:checkAppValidInput", () => {
			it("should not work if data is missing", (done) => {
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
					.expect(400, done);
			});
			it("should not work if name has special char", (done) => {
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
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
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
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
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
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
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
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

			it("should work if all data is valid", (done) => {
				app.post("/test", checkAppValidInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.post("/test")
					.send({
						name: "app name",
						start_date: "jan 1 2020",
						end_date: "jan 5 2020",
						type: "staff",
						applicationLink: "richmun.ca/apply",
						dates_tentative: false,
						organizationSite: "richmun.ca",
					})
					.expect(200, done);
			});
		});

		context("input checker tests PATCH middleware:checkAppIDInput", () => {
			it("should not work if ID doesn't exist on organization's applications", (done) => {
				app.patch("/test/:id", checkAppIDInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.patch("/test/some_code")
					.send({
						type: "Secretariat",
					})
					.expect(400, done);
			});
			it("should not work if website key doesn't exist", (done) => {
				app.patch("/test/:appId", checkAppIDInput, (req: Request, res: Response) => {
					res.status(200).send("success");
				});
				request(app)
					.patch("/test/some_value")
					.send({
						type: "Secretariat",
					})
					.expect(400, done);
			});
			// it("should work if website key exists", (done) => {
			// 	app.patch("/test/:appId", checkAppIDInput, (req: Request, res: Response) => {
			// 		res.status(200).send("success");
			// 	});
			// 	request(app)
			// 		.patch("/test/some_code")
			// 		.send({
			// 			website_key: "munco.ca",
			// 			type: "Secretariat",
			// 		})
			// 		.expect(200, done);
			// });
		});
	});
}
