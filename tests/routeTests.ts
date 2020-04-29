import { expect, assert } from "chai";
import "mocha";
import request from "supertest";
import express from "express";
import app from "../src/app";
import {
	ICalendarResponse,
	IApplicationType,
} from "../src/models/CalendarResponse";
import { MockCalendarData } from "../src/data/MockData";

export function applicationsTest() {
	return describe("applicationsTest", () => {
		context("route /api/applications/all", () => {
			it("should not have empty applications lists", async () => {
				await request(app)
					.get("/api/applications/all")
					.then(async (res) => {
						let qualifying: boolean[] = [];
						await Promise.all(
							res.body.map((obj: ICalendarResponse, index: any) => {
								let apps = obj.applications;
								if (!apps || apps.length == 0) qualifying.push(true);
							})
						).catch((err) => {
							console.log(err, res.body); 
						});
						if (qualifying.length > 0) return true;
						else return false;
					})
					.then((ret) => {
						expect(ret).to.be.false;
					});
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
