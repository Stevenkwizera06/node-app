import chai from 'chai';
import chaiHttp from 'chai-http';
import express from 'express';
import server from '../../server/routes/articles.js';
//import app from '../../server/routes/user-routes.js';



// Chai.should();

chai.use(chaiHttp);

describe('ARTICLE TEST', () => {
    /**
     *  GET  ALL ARTICLES
     */
describe("GET /articles", () =>{
    it("it should get all articles", (done) =>{
        chai.request(server)
        .get("articles")
        .end((err, response) => {
           
        done();

        });
    });
});
	

	describe('ARTICLE TEST', () => {
		/**
		 * SHOULD NOT GET  ALL ARTICLES
		 */
	describe("GET /articles", () =>{
		it("it should not get all articles", (done) =>{
			chai.request(server)
			.get("article")
			.end((err, response) => {
			   
			done();
	
			});
		});
	

	 /**
     * CREAT A NEW ARTICLE
     */
describe("POST /articles", () =>{
    it("it should get a new article", (done) =>{
        chai.request(server)
        .get("articles")
        .end((err, response) => {
           
        done();

        });
    });
});

	 /**
     *NOT CREAT A NEW ARTICLE
     */
describe("POST /articles", () =>{
    it("it should not get a new article", (done) =>{
        chai.request(server)
        .get("articls")
        .end((err, response) => {
           
        done();

        });
    });
});


	  /**
     * GET ONE ARTICLE
     */
describe("PUT /articles:id", () =>{
    it("it should get one articles by id", (done) =>{
        chai.request(server)
        .get("articles")
        .end((err, response) => {
           
        done();

        });
    });
});

	 /**
     * NOT GET ONE ARTICLE
     */
describe("PUT /articles", () =>{
    it("it should not get one articles if we not put id on the path", (done) =>{
        chai.request(server)
        .get("articles")
        .end((err, response) => {
           
        done();

        });
    });
});

	/**
		 * update article
		 */
	 describe("PATCH /articles:id", () =>{
		it("it should UPDATE blogs by ID", (done) =>{
			chai.request(server)
			.patch("articles:id")
			.end((err, response) => {
			done();
	
			});
		});
	});
});


	/**
		 * NOT update article
		 */
	 describe("PATCH /articleS", () =>{
		it("it should not UPDATE articles if we not add ID on the path ", (done) =>{
			chai.request(server)
			.patch("articles:id")
			.end((err, response) => {
			done();
	
			});
		});
	});
		/**
		 * delete article
		 */
		 describe("DELETE /articles:id", () =>{
			it("it should DELETE blogs by ID", (done) =>{
				chai.request(server)
				.patch("articles:id")
				.end((err, response) => {
				done();
		
				});
			});
		});
	});

		/**
		 * NOT delete article
		 */
		 describe("DELETE /articles", () =>{
			it("it should not DELETE article if we not add ID on the path", (done) =>{
				chai.request(server)
				.patch("articles:id")
				.end((err, response) => {
				done();
		
				});
			});
		});
});







// describe("USER AUTHENTICATION TESTS", () => {
// 	before(() => {
// 		mongoose.connection.dropCollection("users");
// 	});
// 	it("Should register a user", (done) => {
// 		const userToRegister = {
// 			name: "steven",
// 			email: "kwiste06@gmail.com",
// 			password: "12345",
// 		};
// 		chai.request(app)
// 			.post("/auth/register")
// 			.send(userToRegister)
// 			.end((err, res) => {
// 				console.log(res.body)
// 				expect(res.status).to.be.equal(404);
// 				done();
// 			});
// 	});
// 	it("Should login a user", (done) => {
// 		chai.request(app)
// 			.post("/auth/login")
// 			.send({ email: "kwiste06@gmail.com", password: "12345" })
// 			.end((err, res) => {
// 				console.log(res.body);
// 				expect(res.status).to.be.equal(404);
// 				done();
// 			});
// 	});
// });