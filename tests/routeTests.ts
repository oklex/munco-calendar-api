import { expect, assert } from "chai";
import "mocha";
import request from 'supertest'
import express from 'express'
import app from '../src/app'

export function applicationsTest() {
	return describe("applicationsTest", () => {
		context("route /api/applications/all", () => {
            it("should not have empty applications lists", async () => {
				await request(app).get('/api/applications/all').then((res) => {
						// console.log('prototype: ', res.body[0].applications[0])
				})
				expect(false).to.be.false;
			})
			it("should not have closed applications", () => {
				expect(false).to.be.false;
			});
		});
	});
}
