const request = require('supertest')("http://localhost:8080");
const assert = require('chai').assert;
const expect = require('chai').expect;
const nock = require('nock');
const superagent = require('superagent');
const supertest = require('supertest');
const should = require('chai').should;

var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('./app');

describe('GET /', function () {
    it("should return landing page", function (done) {
        chai.request(app)
            .get('/')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /groceries', function () {
    it("should return grocery webpage", function (done) {
        chai.request(app)
            .get('/groceries')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /electronics', function () {
    it("should return electronics webpage", function (done) {
        chai.request(app)
            .get('/electronics')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('GET /instruments', function () {
    it("should return instruments webpage", function (done) {
        chai.request(app)
            .get('/instruments')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe("POSTS /register", function () {
    it('should signup as mocha@gmail.com ', (done) => {
        chai.request.agent(app)
            .post('/register')
            .send({
                username: "mocha@gmail.com",
                password: "Test1234",
            });
            done();
    });
});

describe("GET /unknownPage", function () {
    it('should show 404 error for unknown page', function (done) {
        chai.request(app)
            .get('/unknown')
            .end(function(err, res) {
                expect(res).to.redirect;
                done();
            });
    });
});