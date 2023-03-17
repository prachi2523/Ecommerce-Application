// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const utils = require("../models/productModelSchema.js");
// let routes = require("../routes/productRoutes");
// const { trusted } = require("mongoose");
// chai.should();
// chai.use(chaiHttp);

// //add product test cases ...............................................................
// describe("POST/api/product", () => {
//     it("This test case is for adding a product:", (done) => {
//         const data = {
//             productDescription: "Watch",
//             price: "750",
//             offerPrice: "700",
//             features: "waterProof",
//             specifications: "24 hour running battery",
//             venderId: "640afc1d6c5bc478a1ec5847",
//             productName: "bottles",
//             productRatings: "0"

//         };
//         chai
//             .request(server)
//             .post("/product/productAdd/640afc1d6c5bc478a1ec5847")
//             .set("Content-Type", "application/x-www-form-urlencoded")
//             .field(data)
//             .attach("productImage", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("product added successfully");
//                 done();
//             })
//     })
// })

// // //productlist test case..........................
// describe("GET/api/product", () => {
//     it("This test case is showing product list :", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .get("/product/productList")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Product List are : ");
//                 done();
//             })
//     })
// })

// //delete product test cases..........................................................................
// describe("DELETE/api/product", () => {
//     it("This test case is for deleting a product:", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .delete("/product/delete/640f0e5946d7c22a6dc20d5d")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Your  product  deleted successfully");
//                 done();
//             })
//     })
// })

// describe("GET/api/product", () => {
//     it("This test case is for getting  a product details:", (done) => {
//         const data = {

//         };
//         chai
//             .request(server)
//             .get("/product/productDetail/640f0e4046d7c22a6dc20d5a")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Here is the detals of product");
//                 done();
//             })
//     })
// })

// //editing product test cases....................................................................
// describe("PATCH/api/product", () => {
//     it("This test case is for editing a product:", (done) => {
//         const data = {

//             productDescription: "silk material kurti",
//             specifications: "best mat ",
//             productName: "Kurties"


//         };
//         chai
//             .request(server)
//             .patch("/product/edit/640f0e4046d7c22a6dc20d5a")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Thanku for your product.Your product edited successfully");
//                 done();
//             })
//     })
// })