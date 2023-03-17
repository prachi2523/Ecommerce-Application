// let server = require("../index");
// let chaiHttp = require("chai-http");
// var chai = require("chai");
// const utils = require("../models/venderModelSchema");
// let routes = require("../routes/venderRoutes");
// const { trusted } = require("mongoose");
// chai.should();
// chai.use(chaiHttp);

// // //signUp API test cases .............................................................................
// // describe("POST/api/user", () => {
// //     it("It  should return user vender signUp detail :", (done) => {
// //         const data = {
// //             venderName : "Ashwin Dewatwal",
// //             venderEmail : "ashwindewatwal@gmail.com",
// //             password : "123456ABCDEabcde!@#$%",
// //             city : "dewas",
// //             contact : "8225855790",
// //             address : "Sawariya Market Dewas",
// //             aboutVender : "Selling laptop in low prices"

// //         }; 
// //         chai
// //             .request(server)
// //             .post("/vender/signUp")
// //             .set("Content-Type", "application/x-www-form-urlencoded")
// //             .field(data)
// //             .attach("venderProfilePic", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
// //             .send(data)
// //             .end((err, res) => {
// //                 res.should.have.status(201);
// //                 res.should.be.a("object");
// //                 res.body.should.have.property("success").eq(true);
// //                 res.body.should.have.property("message").eq("The vender register successfully");
// //                 done();
// //             })
// //     })
// // })

// // describe("POST/api/vender", () => {
// //     it("It  should  give error in vender signUp detail :", (done) => {
// //         const data = {
// //             venderName : "Manisha Dewatwal",
// //             venderEmail : "manishadewatwal@gmail.com",
// //             password : "123456ABCDEabcde!@#$%",
// //             city : "dewas",
// //             contact : "8225855790",
// //             address : "Sawariya Market Dewas",
// //             aboutVender : "Selling laptop in low prices"


// //         };
// //         chai
// //             .request(server)
// //             .post("/vender/signUp")
// //             .set("Content-Type", "application/x-www-form-urlencoded")
// //             .field(data)
// //             .attach("venderProfilePic", "/Users/Dell/OneDrive/Desktop/3image.jpg", "3image.jpg")
// //             .send(data)
// //             .end((err, res) => {
// //                 res.should.have.status(409);
// //                 res.should.be.a("object");
// //                 res.body.should.have.property("success").eq(false);
// //                 res.body.should.have.property("message").eq("This email is already exists");
// //                 done();
// //             })
// //     })
// // })

// // //2nd API test case
// describe("POST/api/vender", () => {
//     it("It  should return login vender detail :", (done) => {
//         const data = {
//             venderEmail: "nidhidewatwal@gmail.com",
//             password: "Nidhi@505",
//             venderRole: "vender"
//         };
//         chai
//             .request(server)
//             .post("/vender/login")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Login Success");
//                 res.body.should.have.property("token");
//                 done();
//             })
//     })
// })
// it("It  should return error message:", (done) => {
//     const data = {
//         venderEmail: "nidhidewatwa@gmail.com",
//         password: "Nidhi@505",
//         venderRole: "vender"
//     };
//     chai
//         .request(server)
//         .post("/vender/login")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.have.property("success").eq(false);
//             res.body.should.have.property("message").eq(" you are not a register User");

//             done();
//         })
// })

// it("It  should return Email or Password Error Message:", (done) => {
//     const data = {
//         venderEmail: "nidhidewatwal@gmail.com",
//         password: "Nidh@505",
//         venderRole: "vender"
//     };
//     chai
//         .request(server)
//         .post("/vender/login")
//         .send(data)
//         .end((err, res) => {
//             res.should.have.status(400);
//             res.body.should.have.property("success").eq(false);
//             res.body.should.have.property("message").eq("Email or Password is not valid");

//             done();
//         })
// })

// // //send email test API.........................................................................
// describe("POST/api/vender", () => {
//     it("It  should sends mail to us :", (done) => {
//         const data = {
//             venderEmail: "mitanshidewatwal@gmail.com"
//         };
//         chai
//             .request(server)
//             .post("/vender/resetPassword")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Email send to vender successfully");
//                 res.body.should.have.property("token");
//                 done();
//             })
//     })
// })
// describe("POST/api/vender", () => {
//     it("It  should give error in sending mail to us :", (done) => {
//         const data = {
//             venderEmail: "mitanshidewatwa@gmail.com"
//         };
//         chai
//             .request(server)
//             .post("/vender/resetPassword")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(403);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("Email vender is not found");
//                 done();
//             })
//     })
// })
// // //Reset  password .........................................................................
// describe("POST/api/vender", () => {
//     it("It  should reset our password:", (done) => {
//         const data = {

//             newPassword: "NidhiDewatwal@505",
//             confirmPassword: "NidhiDewatwal@505"

//         };
//         chai
//             .request(server)
//             .post("/vender/passwordReset/640afc1d6c5bc478a1ec5847/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXJJZCI6IjY0MGFmYzFkNmM1YmM0NzhhMWVjNTg0NyIsImlhdCI6MTY3ODQ0Mzg5NCwiZXhwIjoxNjc4ODc1ODk0fQ.pp4-_RdcRpKh31QOytWW7fTfqh3PHEOFB5U7smEq_Uw")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("password successfully update");
//                 done();

//             })
//     })
// })

// describe("POST/api/vender", () => {
//     it("It  should give error in rest password and tells password and confirm password is not match:", (done) => {
//         const data = {
//             newPassword: "NidhiDewatwal@505",
//             confirmPassword: "NidhiDewatwa@505"
//         };
//         chai
//             .request(server)
//             .post("/vender/passwordReset/640afc1d6c5bc478a1ec5847/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kZXJJZCI6IjY0MGFmYzFkNmM1YmM0NzhhMWVjNTg0NyIsImlhdCI6MTY3ODQ0Mzg5NCwiZXhwIjoxNjc4ODc1ODk0fQ.pp4-_RdcRpKh31QOytWW7fTfqh3PHEOFB5U7smEq_Uw")
//             .send(data)
//             .end((err, res) => {
//                 res.should.have.status(403);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(false);
//                 res.body.should.have.property("message").eq("password and Confirmpassword is not match");
//                 done();

//             })
//     })
// })

