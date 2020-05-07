import { expect, assert } from "chai";
import "mocha";
import request from "supertest";
import app from "../src/app";


export function applicationsPostTests() {
	return describe("applicationsPostTest", () => {
		context("route /api/applications/new", () => {
			it("should not work if data is missing", async () => {
                request(app).post("/api/applications/new").expect(500)
            });
			it("should not work if name has special char", async () => {
                request(app).post("/api/applications/new").send({
                    name: "app name !",
                    start_date: "jan 1 2020",
                    end_date: "jan 5 2020",
                    type: "staff",
                    applicationLink: "richmun.ca/apply",
                    dates_tentative: false
                }).expect(500)
            })
            it("should not work if any date is wrong", async () => {
                request(app).post("/api/applications/new").send({
                    name: "app name",
                    start_date: "not a date",
                    end_date: "jan 5 2020",
                    type: "staff",
                    applicationLink: "richmun.ca/apply",
                    dates_tentative: false
                }).expect(500)
            })
            it("should not work if type is wrong", async () => {
                request(app).post("/api/applications/new").send({
                    name: "app name",
                    start_date: "jan 1 2020",
                    end_date: "jan 5 2020",
                    type: "fake type",
                    applicationLink: "richmun.ca/apply",
                    dates_tentative: false
                }).expect(500)
            })
            
            it("should not work if website is wrong", async () => {
                request(app).post("/api/applications/new").send({
                    name: "app name",
                    start_date: "jan 1 2020",
                    end_date: "jan 5 2020",
                    type: "staff",
                    applicationLink: "not a website",
                    dates_tentative: false
                }).expect(500)
            });
            
            
            it("should work if all data is valid", async () => {
                request(app).post("/api/applications/new").send({
                    name: "app name",
                    start_date: "jan 1 2020",
                    end_date: "jan 5 2020",
                    type: "staff",
                    applicationLink: "richmun.ca/apply",
                    dates_tentative: false,
                    organizationSite: "richmun.ca"
                }).expect(200)
			});
		});
	});
}
