let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../model/userSchema");
let routes = require("../routers/userRoute");
const randomemail=require('random-email')

chai.should();
chai.use(chaiHttp);

// // //2nd API test case
describe("POST/api/user", () => {
    it("It  should return login user detail :", (done) => {
        const data = {
            userEmail:"prachiverma2521@gmail.com",
            password:"prachi123",
            role:"user"
        };
        chai
            .request(server)
            .post("/user/login")
            .send(data)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq(true);
                res.body.should.have.property("message").eq("login Successful");
                res.body.should.have.property("token");
                done();
            })
    })
})
it("It  should return error message:", (done) => {
    const data = {
        userEmail: "mitanshidewatwa@gmail.com",
            password: "123ABCabcde",
            role: "user"
    };
    chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("success").eq(false);
            res.body.should.have.property("message").eq("you are not a register user");

            done();
        })
})

it("It  should return Password Error Message:", (done) => {
    const data = {
            userEmail: "prachiverma2521@gmail.com",
            password: "123ABCabcd",
            role: "user"
    };
    chai
        .request(server)
        .post("/user/login")
        .send(data)
        .end((err, res) => {
            res.should.have.status(400);
            res.body.should.have.property("success").eq(false);
            res.body.should.have.property("message").eq("Password does not Match");
            done();
        })
})

//signUp API test cases .............................................................................
describe("POST/api/user", () => {
    it("It  should return  user  signUp detail :", (done) => {
        const email=randomemail({domain:"gmail.com"})
        const data = {
            userName: "Mitanshi",
            userEmail: email,
            password: "123456ABCDEabcde!@#$%",
            contact:123456,
            city:"indore",
            role:"user",
            gender:"female"
        }
        chai
            .request(server)
            .post("/user/register")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .field(data)
            .attach("profilePic","/Users/91939/Pictures/Screenshots/Screenshot (6).png", "Screenshot (6).png")
            .end((err, res) => {
                res.should.have.status(201);
                res.should.be.a("object");
                res.body.should.have.property("success").eq(true);
                res.body.should.have.property("message").eq("User created succeessfully");
                done();
            })
    })
    it("It  should  give error in signUp detail :", (done) => {
                const data = {
                    userName: "Mitanshi Dewatwal",
                    userEmail: "prachi72@gmail.com",
                    password: "123456ABCDEabcde!@#$%",
                    city: "dewas",
                    phoneNo: "9617273505",
                    address: "215 MG Road Dewas MP",
                    gender: "female"
        
                };
                chai
                    .request(server)
                    .post("/user/register")
                    .set("Content-Type", "application/x-www-form-urlencoded")
                    .field(data)
                    .attach("profilePic","/Users/91939/Pictures/Screenshots/Screenshot (6).png", "Screenshot (6).png")
                    .end((err, res) => {
                        res.should.have.status(409);
                        res.should.be.a("object");
                        res.body.should.have.property("success").eq(false);
                        res.body.should.have.property("message").eq("User with this email is already exist");
                        done();
                    })
            })
})
