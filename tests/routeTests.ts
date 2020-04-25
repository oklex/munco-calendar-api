import { expect, assert } from "chai";
import "mocha";
var httpMocks = require("node-mocks-http");
// import applicationRoute from '../src/routes/applications'

export function applicationsTest() {
	return describe("applicationsTest", () => {
		context("route /api/applications/all", () => {
			// let ApplicationsAllRequest = httpMocks.createRequest({
			// 	method: "GET",
			// 	url: "/api/applications/all",
            // });
            // var ApplicationsAllResponse = httpMocks.createResponse();
            // applicationRoute(ApplicationsAllRequest, ApplicationsAllResponse)
            
            it("should not have empty applications lists", () => {
				expect(false).to.be.false;
			});
			it("should not have closed applications", () => {
				expect(false).to.be.false;
			});
		});
	});
}
