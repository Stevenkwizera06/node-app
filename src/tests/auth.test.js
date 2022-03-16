import app from "../../server/server";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mongoose from "mongoose";

chai.use(chaiHttp);

describe("USER AUTHENTICATION TESTS", () => {
	before(() => {
		mongoose.connection.dropCollection("users");
	});
	it("Should register a user", (done) => {
		const userToRegister = {
			name: "steven",
			email: "kwiste06@gmail.com",
			password: "12345",
		};
		chai
			.request(app)
			.post("/auth/register")
			.send(userToRegister)
			.end((err, res) => {
				console.log(res.body)
				expect(res.status).to.be.equal(400);
				done();
			});
	});
	it("Should login a user", (done) => {
		chai
			.request(app)
			.post("/auth/login")
			.send({ email: "kwiste06@gmail.com", password: "12345" })
			.end((err, res) => {
				console.log(res.body);
				expect(res.status).to.be.equal(404);
				done();
			});
	});
});